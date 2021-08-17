import { CurrencyAmount, JSBI, Token, Trade } from '@pancakeswap-libs/sdk'
import React, { useCallback, useContext, useEffect, useMemo, useState, useRef, createContext } from 'react'
import { CardBody, ArrowDownIcon, Button, IconButton, Text, Flex } from '@pancakeswap-libs/uikit'
import styled, { ThemeContext } from 'styled-components'
import Page from 'components/Layout/Page'
import AddressInputPanel from 'components/AddressInputPanel'
import Card, { GreyCard } from 'components/Card'
import { AutoColumn, FullHeightColumn } from 'components/Column'
import ConfirmSwapModal from 'components/swap/ConfirmSwapModal'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import SwapCardNav from 'components/SwapCardNav'
import AutoCardNav from 'components/AutoCardNav'
import { AutoRow, RowBetween } from 'components/Row'
import AdvancedSwapDetailsDropdown from 'components/swap/AdvancedSwapDetailsDropdown'
import BetterTradeLink from 'components/swap/BetterTradeLink'
import confirmPriceImpactWithoutFee from 'components/swap/confirmPriceImpactWithoutFee'
import { ArrowWrapper, BottomGrouping, SwapCallbackError, Wrapper } from 'components/swap/styleds'
import TradePrice from 'components/swap/TradePrice'
import TokenWarningModal from 'components/TokenWarningModal'
import SyrupWarningModal from 'components/SyrupWarningModal'
import ProgressSteps from 'components/ProgressSteps'
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios';

import { BETTER_TRADE_LINK_THRESHOLD, INITIAL_ALLOWED_SLIPPAGE } from 'constants/index'
import { isTradeBetter } from 'data/V1'
import { useActiveWeb3React } from 'hooks'
import { useCurrency } from 'hooks/Tokens'
import { ApprovalState, useApproveCallbackFromTrade } from 'hooks/useApproveCallback'
import { useSwapCallback } from 'hooks/useSwapCallback'
import useToggledVersion, { Version } from 'hooks/useToggledVersion'
import useWrapCallback, { WrapType } from 'hooks/useWrapCallback'
import { useSetVersion, useSwapType } from 'state/application/hooks'
import { Field } from 'state/swap/actions'
import { useDefaultsFromURLSearch, useDerivedSwapInfo, useSwapActionHandlers, useSwapState } from 'state/swap/hooks'
import { useExpertModeManager, useUserDeadline, useUserSlippageTolerance } from 'state/user/hooks'
import { LinkStyledButton, TYPE } from 'components/Shared'
import { maxAmountSpend } from 'utils/maxAmountSpend'
import { computeTradePriceBreakdown, warningSeverity } from 'utils/prices'
import Loader from 'components/Loader'
import { TranslateString } from 'utils/translateTextHelpers'

import { ReactComponent as DownArrow } from 'assets/svg/icon/DownArrow.svg'
import { ReactComponent as HelpIcon } from 'assets/svg/icon/HelpIcon.svg'
import { ReactComponent as HelpIcon1 } from 'assets/svg/icon/HelpIcon1.svg'
import BinanceLogo from 'assets/images/binance-logo.png'
import SwapBanner from 'assets/images/DogeBanner1.png'
import FarmBanner from 'assets/images/SphynxFarmbanner.jpg'
import StakingBanner from 'assets/images/SphynxStakebanner.jpg'

import { getHotTokens, getTokenInfo } from 'utils/request'
import ConnectWalletButton from 'components/ConnectWalletButton'
import PageHeader from 'components/PageHeader'
import HotTokenBar from './components/HotTokenBar'
// eslint-disable-next-line import/no-cycle
import TokenInfo from './components/TokenInfo'
import Cards from './components/Layout'

import CoinStatsBoard from './components/CoinStatsBoard'

import TransactionCard from './components/TransactionCard'
import ContractPanel from './components/ContractPanel'

import { HotTokenType, TokenDetailProps, HistoricalDataProps } from './components/types'
import LiquidityWidget from '../Pool/LiquidityWidget'
import {TVChartContainer} from './TVChartContainer'
// eslint-disable-next-line import/extensions
// import datafeed from "./components/main.js";



const { main: Main } = TYPE

const ArrowContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 12px;
  margin: 0;
  & svg {
    width: 14px;
    height: 16px;
  }
`

const ArrowContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -4px 0;
  z-index: 3;
  position: relative;
`

const SlippageText = styled.p`
  font-size: 10px;
  font-weight: 500;
  line-height: 12px;
  color: white;
  margin: 0 8px;
  & span {
    text-decoration: underline;
  }
`

const InfoCard = styled.div`
  padding: 32px;
  border-radius: 24px;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;
  & h1 {
    font-size: 32px;
    line-height: 38px;
    font-weight: bold;
  }
  & h2 {
    font-size: 28px;
    line-height: 32px;
    font-weight: bold;
  }
  & p {
    font-size: 16px;
    line-height: 19px;
    font-weight: 300;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    & h1 {
      font-size: 36px;
      line-height: 42px;
    }
    & h2 {
      font-size: 32px;
      line-height: 37px;
    }
    & p {
      font-size: 18px;
      line-height: 21px;
    }  
  }
`

const InfoCardWrapper = styled.div`
  ${({ theme }) => theme.mediaQueries.md} {
    display: flex;
    margin-top: 20px;
    & > div {
      flex: 1;
      &:first-child {
        margin-right: 10px;
      }
      &:last-child {
        margin-left: 10px;
      }
    }
  }
`

const CountDownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 600px;
  width: 100%;
  margin: 16px auto;
`

const CountDownItem = styled.div`
  color: white;
  text-align: center;
  margin: 12px;
  & > div {
    width: 94px;
    height: 94px;
    background:#8b2a9b ;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    border-radius: 24px;
  }
  & > p {
    font-size: 16px;
    font-weight: bold;
    margin-top: 4px;
  }
`

const PoolWrapper = styled.div`
  & > div {
    background: transparent;
    & div {
      background: transparent;
    }
    & div {
      color: white;
    }
  }
`

const SwapRightBanner = styled.div`
  position: absolute;
  max-width: 350px;
  right: 0;
  top: 10px;
  opacity: 0.6;
  z-index: -1;
  & img {
    width: 100%;
  }
`

const BottomCard = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(0, 0, 0, 0.4);
  height: 480px;
  filter: drop-shadow(0 2px 12px rgba(37, 51, 66, 0.15));
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  ${({ theme }) => theme.mediaQueries.md} {
    width: 320px !important;
    margin-bottom: -60px !important;
  }
  & div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  & h1, & button {
    position: absolute;
    z-index: 2;
  }
  & h1 {
    top: 0;
    width: 100%;
    color: white;
    font-size: 24px;
    font-weight: 600;
    line-height: 68px;
    text-align: center;
    border-bottom: 1px solid #C4C4C4;
  }
  & button {
    bottom: 40px;
    left: 5%;
    width: 90%;
    background: #8B2A9B;
    outline: none;
    box-shadow: none;
    border: none;
  }
`

const Swap = () => {


  const[address,setaddress]=useState('');
  function handleChange(value){
      console.log("console parent::::" , address)
      setaddress(value);
    }


  // const getapi=()=>{
  //   axios.get('http://192.168.18.65:8080/v1.0/dogeson/historical?dexId=0x3b9dd0ac3fa49988a177b7c020f680295fb21996&span=month').then((response)=>{
  //     console.log("getapi",response);
      
  //   })
  //   .catch((error) => { console.log("Error", error); })
  // }

  // useEffect(()=>{
  //   getapi();
  // },[])
  const loadedUrlParams = useDefaultsFromURLSearch()
  
  // token warning stuff
  const [loadedInputCurrency, loadedOutputCurrency] = [
    useCurrency(loadedUrlParams?.inputCurrencyId),
    useCurrency(loadedUrlParams?.outputCurrencyId),
  ]
  const [dismissTokenWarning, setDismissTokenWarning] = useState<boolean>(false)
  const [isSyrup, setIsSyrup] = useState<boolean>(false)
  const [syrupTransactionType, setSyrupTransactionType] = useState<string>('')
  const urlLoadedTokens: Token[] = useMemo(
    () => [loadedInputCurrency, loadedOutputCurrency]?.filter((c): c is Token => c instanceof Token) ?? [],
    [loadedInputCurrency, loadedOutputCurrency]
  )
  const handleConfirmTokenWarning = useCallback(() => {
    setDismissTokenWarning(true)
  }, [])

  const handleConfirmSyrupWarning = useCallback(() => {
    setIsSyrup(false)
    setSyrupTransactionType('')
  }, [])

  const { account } = useActiveWeb3React()
  const theme = useContext(ThemeContext)

  const [isExpertMode] = useExpertModeManager()

  // get custom setting values for user
  const [deadline] = useUserDeadline()
  const [allowedSlippage] = useUserSlippageTolerance()

  // swap state
  const { independentField, typedValue, recipient } = useSwapState()
  const {
    v1Trade,
    v2Trade,
    currencyBalances,
    parsedAmount,
    currencies,
    inputError: swapInputError,
  } = useDerivedSwapInfo()
  const { wrapType, execute: onWrap, inputError: wrapInputError } = useWrapCallback(
    currencies[Field.INPUT],
    currencies[Field.OUTPUT],
    typedValue
  )
  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE
  //   const { address: recipientAddress } = useENSAddress(recipient)
  // const toggledVersion = useToggledVersion()
  const { versionSet } = useSetVersion()
  const { swapType } = useSwapType();
  const toggledVersion = versionSet
  const trade = showWrap
    ? undefined
    : {
        [Version.v1]: v1Trade,
        [Version.v2]: v2Trade,
      }[toggledVersion]

  const betterTradeLinkVersion: Version | undefined =
    toggledVersion === Version.v2 && isTradeBetter(v2Trade, v1Trade, BETTER_TRADE_LINK_THRESHOLD)
      ? Version.v1
      : toggledVersion === Version.v1 && isTradeBetter(v1Trade, v2Trade)
      ? Version.v2
      : undefined

  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
      }

  const { onSwitchTokens, onCurrencySelection, onUserInput, onChangeRecipient } = useSwapActionHandlers()
  const isValid = !swapInputError
  const dependentField: Field = independentField === Field.INPUT ? Field.OUTPUT : Field.INPUT

  const handleTypeInput = useCallback(
    (value: string) => {
      onUserInput(Field.INPUT, value)
    },
    [onUserInput]
  )
  const handleTypeOutput = useCallback(
    (value: string) => {
      onUserInput(Field.OUTPUT, value)
    },
    [onUserInput]
  )

  // modal and loading
  const [{ showConfirm, tradeToConfirm, swapErrorMessage, attemptingTxn, txHash }, setSwapState] = useState<{
    showConfirm: boolean
    tradeToConfirm: Trade | undefined
    attemptingTxn: boolean
    swapErrorMessage: string | undefined
    txHash: string | undefined
  }>({
    showConfirm: false,
    tradeToConfirm: undefined,
    attemptingTxn: false,
    swapErrorMessage: undefined,
    txHash: undefined,
  })

  const formattedAmounts = {
    [independentField]: typedValue,
    [dependentField]: showWrap
      ? parsedAmounts[independentField]?.toExact() ?? ''
      : parsedAmounts[dependentField]?.toSignificant(6) ?? '',
  }

  const route = trade?.route
  console.log('bbb', trade, ' ', showWrap, ' ', v1Trade, ' ', v2Trade)
  const userHasSpecifiedInputOutput = Boolean(
    currencies[Field.INPUT] && currencies[Field.OUTPUT] && parsedAmounts[independentField]?.greaterThan(JSBI.BigInt(0))
  )
  const noRoute = !route

  // check whether the user has approved the router on the input token
  const [approval, approveCallback] = useApproveCallbackFromTrade(trade, allowedSlippage)

  // check if user has gone through approval process, used to show two step buttons, reset on token change
  const [approvalSubmitted, setApprovalSubmitted] = useState<boolean>(false)

  // mark when a user has submitted an approval, reset onTokenSelection for input field
  useEffect(() => {
    if (approval === ApprovalState.PENDING) {
      setApprovalSubmitted(true)
    }
  }, [approval, approvalSubmitted])

  const maxAmountInput: CurrencyAmount | undefined = maxAmountSpend(currencyBalances[Field.INPUT])
  const atMaxAmountInput = Boolean(maxAmountInput && parsedAmounts[Field.INPUT]?.equalTo(maxAmountInput))

  // the callback to execute the swap
  const { callback: swapCallback, error: swapCallbackError } = useSwapCallback(
    trade,
    allowedSlippage,
    deadline,
    recipient
  )

  const { priceImpactWithoutFee } = computeTradePriceBreakdown(trade)

  const handleSwap = useCallback(() => {
    if (priceImpactWithoutFee && !confirmPriceImpactWithoutFee(priceImpactWithoutFee)) {
      return
    }
    if (!swapCallback) {
      return
    }
    setSwapState((prevState) => ({ ...prevState, attemptingTxn: true, swapErrorMessage: undefined, txHash: undefined }))
    swapCallback()
      .then((hash) => {
        setSwapState((prevState) => ({
          ...prevState,
          attemptingTxn: false,
          swapErrorMessage: undefined,
          txHash: hash,
        }))
      })
      .catch((error) => {
        setSwapState((prevState) => ({
          ...prevState,
          attemptingTxn: false,
          swapErrorMessage: error.message,
          txHash: undefined,
        }))
      })
  }, [priceImpactWithoutFee, swapCallback, setSwapState])

  // errors
  const [showInverted, setShowInverted] = useState<boolean>(false)

  // warnings on slippage
  const priceImpactSeverity = warningSeverity(priceImpactWithoutFee)

  // show approve flow when: no error on inputs, not approved or pending, or approved in current session
  // never show if price impact is above threshold in non expert mode
  const showApproveFlow =
    !swapInputError &&
    (approval === ApprovalState.NOT_APPROVED ||
      approval === ApprovalState.PENDING ||
      (approvalSubmitted && approval === ApprovalState.APPROVED)) &&
    !(priceImpactSeverity > 3 && !isExpertMode)

  const handleConfirmDismiss = useCallback(() => {
    setSwapState((prevState) => ({ ...prevState, showConfirm: false }))

    // if there was a tx hash, we want to clear the input
    if (txHash) {
      onUserInput(Field.INPUT, '')
    }
  }, [onUserInput, txHash, setSwapState])

  const handleAcceptChanges = useCallback(() => {
    setSwapState((prevState) => ({ ...prevState, tradeToConfirm: trade }))
  }, [trade])

  // This will check to see if the user has selected Syrup to either buy or sell.
  // If so, they will be alerted with a warning message.
  const checkForSyrup = useCallback(
    (selected: string, purchaseType: string) => {
      if (selected === 'syrup') {
        setIsSyrup(true)
        setSyrupTransactionType(purchaseType)
      }
    },
    [setIsSyrup, setSyrupTransactionType]
  )

  const handleInputSelect = useCallback(
    (inputCurrency) => {
      setApprovalSubmitted(false) // reset 2 step UI for approvals
      onCurrencySelection(Field.INPUT, inputCurrency)
      if (inputCurrency.symbol.toLowerCase() === 'syrup') {
        checkForSyrup(inputCurrency.symbol.toLowerCase(), 'Selling')
      }
    },
    [onCurrencySelection, setApprovalSubmitted, checkForSyrup]
  )

  const handleMaxInput = useCallback(() => {
    if (maxAmountInput) {
      onUserInput(Field.INPUT, maxAmountInput.toExact())
    }
  }, [maxAmountInput, onUserInput])

  const handleOutputSelect = useCallback(
    (outputCurrency) => {
      onCurrencySelection(Field.OUTPUT, outputCurrency)
      if (outputCurrency.symbol.toLowerCase() === 'syrup') {
        checkForSyrup(outputCurrency.symbol.toLowerCase(), 'Buying')
      }
    },
    [onCurrencySelection, checkForSyrup]
  )

  const [currentToken, setCurrentToken] = useState<TokenDetailProps | null>(null)
  const [hotTokens, setHotTokens] = useState<HotTokenType[] | null>(null)
  const [timeNow, setTimeNow] = useState(Date.now())
  const countDownDeadline = new Date(Date.UTC(2021, 6, 1, 0, 0, 0, 0)).getTime();

  useEffect(() => {
    let timeout;
    if (timeNow < countDownDeadline) {
      timeout = setTimeout(() => {
        setTimeNow(Date.now());
      }, 1000)
    } else {
      clearTimeout(timeout);
      setTimeNow(countDownDeadline);
    }
  }, [timeNow, countDownDeadline])
  // const [historicalData, setHistoricalData = useState<HistoricalDataProps[] | null>(null)

  const countSeconds = useMemo(() => moment(countDownDeadline).diff(moment(timeNow), 'seconds')
  , [timeNow, countDownDeadline])


  useEffect(() => {
    const init = async () => {
      // const tokens = await getHotTokens()
      // setHotTokens(tokens.data.tokens)
      const hotTokendata = [
        {
          name: 'Cumino',
          symbol: 'Cumino',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        },
        {
          name: 'UFO',
          symbol: 'UFO',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
          direction: 'up'
        },
        {
          name: 'Astra',
          symbol: 'Astra',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
          direction: 'up'
        },
        {
          name: 'Starl',
          symbol: 'Starl',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        },
        {
          name: 'Floki',
          symbol: 'Floki',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
          direction: 'down'
        },
        {
          name: 'Dext',
          symbol: 'Dext',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        },
        {
          name: 'Dext',
          symbol: 'Dext',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
          direction: 'up'
        },
        {
          name: 'F9',
          symbol: 'F9',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
          direction: 'down'
        },
        {
          name: 'BTC',
          symbol: 'BTC',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        },
        {
          name: 'THUN',
          symbol: 'THUN',
          dexId: '117bccac249c0c5fcde923a80ac0af53',
          contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        }
      ]
      setHotTokens(hotTokendata)
      
      const currentTokenInfo = {
        iconSmall: BinanceLogo,
        iconLarge: BinanceLogo,
        iconThumb: BinanceLogo,
        name: 'BNB',
        symbol: 'BNB',
        contractAddress: '0xfec01d8cefc67ed90d8fcad445ef04603ad546d2',
        website: '',
        price: 0.984754,
        priceChange24H: 2.5,
        volumne24H: 177938,
        liquidity: 5359493,
        marketCap: 13377791,
        totalSupply: 0,
        bnbLPHoldings: 0,
        bnbLPHoldingsUSD: 0,
        transactions: 0,
        holders: 0
      }
      setCurrentToken(currentTokenInfo);
      // TODO, Get first token info
      // const tokenInfo = await getTokenInfo(tokens.data.tokens[3].dexId)
      // setCurrentToken(tokenInfo.data.token ?? null)

      // const historical = await getHistoricalData(tokenInfo.geckoId, 200)
      // setHistoricalData(historical.data.bars ?? null)
    }
    init()
  }, [])

  return (   
    <Page>
      <TokenWarningModal
        isOpen={urlLoadedTokens.length > 0 && !dismissTokenWarning}
        tokens={urlLoadedTokens}
        onConfirm={handleConfirmTokenWarning}
      />
      <SyrupWarningModal
        isOpen={isSyrup}
        transactionType={syrupTransactionType}
        onConfirm={handleConfirmSyrupWarning}
      />
      <HotTokenBar
        tokens={hotTokens}
      />
      {/* <SwapRightBanner>
        <img src={SwapBanner} alt='Swap Banner' />
      </SwapRightBanner> */}
      <Cards>
        <div>
          <div style={{ height: 48, marginBottom: 20 }}>
            <Flex alignItems='center' justifyContent='center' style={{ marginBottom: 8 }}>
              <SwapCardNav />
            </Flex>
            <Flex alignItems='center' justifyContent='center'>
              <AutoCardNav />
            </Flex>
          </div>
          <Card bgColor='rgba(0, 0, 0, 0.2)' borderRadius='8px' padding='0 10px 20px 10px'>
            { swapType === 'swap' &&
              <Wrapper id="swap-page">
                <ConfirmSwapModal
                  isOpen={showConfirm}
                  trade={trade}
                  originalTrade={tradeToConfirm}
                  onAcceptChanges={handleAcceptChanges}
                  attemptingTxn={attemptingTxn}
                  txHash={txHash}
                  recipient={recipient}
                  allowedSlippage={allowedSlippage}
                  onConfirm={handleSwap}
                  swapErrorMessage={swapErrorMessage}
                  onDismiss={handleConfirmDismiss}
                />
                <PageHeader title="Swap" description="" showAuto />
                <CardBody style={{ padding: '0 10px' }}>
                  <CurrencyInputPanel
                    label={
                      independentField === Field.OUTPUT && !showWrap && trade
                        ? 'From (estimated)'
                        : TranslateString(76, 'From')
                    }
                    value={formattedAmounts[Field.INPUT]}
                    showMaxButton={!atMaxAmountInput}
                    currency={currencies[Field.INPUT]}
                    onUserInput={handleTypeInput}
                    onMax={handleMaxInput}
                    onCurrencySelect={handleInputSelect}
                    otherCurrency={currencies[Field.OUTPUT]}
                    id="swap-currency-input"
                  />
                  <ArrowContent>
                    <ArrowContainer
                      onClick={() => {
                        setApprovalSubmitted(false) // reset 2 step UI for approvals
                        onSwitchTokens()
                      }}>
                        <DownArrow />
                    </ArrowContainer>
                    {recipient === null && !showWrap && isExpertMode ? (
                      <LinkStyledButton id="add-recipient-button" onClick={() => onChangeRecipient('')}>
                        + Add a send (optional)
                      </LinkStyledButton>
                    ) : null}
                  </ArrowContent>
                  <CurrencyInputPanel
                    value={formattedAmounts[Field.OUTPUT]}
                    onUserInput={handleTypeOutput}
                    label={
                      independentField === Field.INPUT && !showWrap && trade ? 'To (estimated)' : TranslateString(80, 'To')
                    }
                    showMaxButton={false}
                    currency={currencies[Field.OUTPUT]}
                    onCurrencySelect={handleOutputSelect}
                    otherCurrency={currencies[Field.INPUT]}
                    id="swap-currency-output"
                  />

                  {recipient !== null && !showWrap ? (
                    <>
                      <ArrowContent>
                        <ArrowContainer>
                          <DownArrow />
                        </ArrowContainer>
                        <LinkStyledButton id="remove-recipient-button" onClick={() => onChangeRecipient(null)}>
                          - Remove send
                        </LinkStyledButton>
                      </ArrowContent>
                      <AddressInputPanel id="recipient" value={recipient} onChange={onChangeRecipient} />
                    </>
                  ) : null}

                  {/* {showWrap ? null : (
                    <Card padding=".25rem .75rem 0 .75rem" borderRadius="20px">
                      <AutoColumn gap="4px">
                        {Boolean(trade) && (
                          <RowBetween align="center">
                            <Text fontSize="14px">Price</Text>
                            <TradePrice
                              price={trade?.executionPrice}
                              showInverted={showInverted}
                              setShowInverted={setShowInverted}
                            />
                          </RowBetween>
                        )}
                        {allowedSlippage !== INITIAL_ALLOWED_SLIPPAGE && (
                          <RowBetween align="center">
                            <Text fontSize="14px">Slippage Tolerance</Text>
                            <Text fontSize="14px">{allowedSlippage / 100}%</Text>
                          </RowBetween>
                        )}
                      </AutoColumn>
                    </Card>
                  )} */}

                  <Flex justifyContent='space-between' alignItems='center' marginTop='20px'>
                    <Flex alignItems='center'>
                      <HelpIcon />
                      <SlippageText><span>Slippage Tolerance</span><b>: {allowedSlippage / 100}%</b></SlippageText>
                    </Flex>
                    {currencies[Field.INPUT] && currencies[Field.OUTPUT] &&
                      <Flex alignItems='center'>
                        <SlippageText><b>1 {currencies[Field.INPUT]?.symbol} = { trade?.executionPrice.toSignificant(6) } {currencies[Field.OUTPUT]?.symbol}</b></SlippageText>
                        <HelpIcon1 />
                      </Flex>                
                    }
                  </Flex>

                  <BottomGrouping>
                    {!account ? (
                      <ConnectWalletButton fullWidth />
                    ) : showWrap ? (
                      <Button disabled={Boolean(wrapInputError)} onClick={onWrap} fullWidth>
                        {wrapInputError ??
                          (wrapType === WrapType.WRAP ? 'Wrap' : wrapType === WrapType.UNWRAP ? 'Unwrap' : null)}
                      </Button>
                    ) : noRoute && userHasSpecifiedInputOutput ? (
                      <GreyCard style={{ textAlign: 'center' }}>
                        <Main mb="4px">Insufficient liquidity for this trade.</Main>
                      </GreyCard>
                    ) : showApproveFlow ? (
                      <RowBetween>
                        <Button
                          onClick={approveCallback}
                          disabled={approval !== ApprovalState.NOT_APPROVED || approvalSubmitted}
                          style={{ width: '48%' }}
                          variant={approval === ApprovalState.APPROVED ? 'success' : 'primary'}
                        >
                          {approval === ApprovalState.PENDING ? (
                            <AutoRow gap="6px" justify="center">
                              Approving <Loader stroke="white" />
                            </AutoRow>
                          ) : approvalSubmitted && approval === ApprovalState.APPROVED ? (
                            'Approved'
                          ) : (
                            `Approve ${currencies[Field.INPUT]?.symbol}`
                          )}
                        </Button>
                        <Button
                          onClick={() => {
                            if (isExpertMode) {
                              handleSwap()
                            } else {
                              setSwapState({
                                tradeToConfirm: trade,
                                attemptingTxn: false,
                                swapErrorMessage: undefined,
                                showConfirm: true,
                                txHash: undefined,
                              })
                            }
                          }}
                          style={{ width: '48%' }}
                          id="swap-button"
                          disabled={
                            !isValid || approval !== ApprovalState.APPROVED || (priceImpactSeverity > 3 && !isExpertMode)
                          }
                          variant={isValid && priceImpactSeverity > 2 ? 'danger' : 'primary'}
                        >
                          {priceImpactSeverity > 3 && !isExpertMode
                            ? `Price Impact High`
                            : `Swap${priceImpactSeverity > 2 ? ' Anyway' : ''}`}
                        </Button>
                      </RowBetween>
                    ) : (
                      <Button
                        onClick={() => {
                          if (isExpertMode) {
                            handleSwap()
                          } else {
                            setSwapState({
                              tradeToConfirm: trade,
                              attemptingTxn: false,
                              swapErrorMessage: undefined,
                              showConfirm: true,
                              txHash: undefined,
                            })
                          }
                        }}
                        id="swap-button"
                        disabled={!isValid || (priceImpactSeverity > 3 && !isExpertMode) || !!swapCallbackError}
                        variant={isValid && priceImpactSeverity > 2 && !swapCallbackError ? 'danger' : 'primary'}
                        fullWidth
                      >
                        {swapInputError ||
                          (priceImpactSeverity > 3 && !isExpertMode
                            ? `Price Impact Too High`
                            : `Swap${priceImpactSeverity > 2 ? ' Anyway' : ''}`)}
                      </Button>
                    )}
                    {showApproveFlow && <ProgressSteps steps={[approval === ApprovalState.APPROVED]} />}
                    {isExpertMode && swapErrorMessage ? <SwapCallbackError error={swapErrorMessage} /> : null}
                    {betterTradeLinkVersion && <BetterTradeLink version={betterTradeLinkVersion} />}
                  </BottomGrouping>
                </CardBody>
              </Wrapper>            
            }
            {
              (swapType === 'liquidity' || swapType === 'addLiquidity') &&
              <PoolWrapper id="pool-page">
                <LiquidityWidget />
              </PoolWrapper>
            }
          </Card>
          <AdvancedSwapDetailsDropdown trade={trade} />
        </div>
        <div>
          <FullHeightColumn>
            <ContractPanel  value={handleChange}
            />
             {/* tokenInfo={currentToken} */}
            <CoinStatsBoard
             
            />
            <TVChartContainer/>
           
          </FullHeightColumn>
        </div>
        <div>
           
          <TokenInfo  />
        
        </div>
        <div>
          <TransactionCard
        
          />
        </div>
        <BottomCard style={{ backgroundImage: `url(${FarmBanner})` }}>
          <h1>Farms</h1>
          <div />
          <a href='https://farm.sphynxswap.finance/farms' target='_blank' rel='noreferrer'><Button>Start Farming</Button></a>
        </BottomCard>
        <BottomCard style={{ backgroundImage: `url(${StakingBanner})` }}>
          <h1>Staking</h1>
          <div />
          <a href='https://farm.sphynxswap.finance/pools' target='_blank' rel='noreferrer'><Button>Start Staking</Button></a>
        </BottomCard>
      </Cards>
      {/* <InfoCard>
        <h1>Sphynx Charity Starts in</h1>
        <CountDownContainer>
          <CountDownItem>
            <div>{ Math.floor(countSeconds / (3600 * 24)) }</div>
            <p>Days</p>
          </CountDownItem>
          <CountDownItem>
            <div>{ Math.floor(countSeconds / 3600) % 24 }</div>
            <p>Hours</p>
          </CountDownItem>
          <CountDownItem>
            <div>{ Math.floor(countSeconds / 60) % 60 }</div>
            <p>Minutes</p>
          </CountDownItem>
          <CountDownItem>
            <div>{ countSeconds % 60 }</div>
            <p>Seconds</p>
          </CountDownItem>
        </CountDownContainer>
      </InfoCard>
      <InfoCardWrapper>
        <InfoCard>
          <h1>Sphynx Stats</h1>
          <Flex justifyContent='space-between' style={{ margin: '24px 0' }}>
            <p><b>Total AstraCoins Supply</b></p>
            <p><b>184,502,810</b></p>
          </Flex>
          <Flex justifyContent='space-between'>
            <p><b>Total AstraCoins Burned</b></p>
            <p><b>152,331,140</b></p>
          </Flex>
        </InfoCard>
        <InfoCard style={{ textAlign: 'center' }}>
          <h1>Total Value Locked (TVL)</h1>
          <h2 style={{ margin: '24px 0' }}>$8,799,370,991</h2>
          <p>Across all LPs</p>
        </InfoCard>
      </InfoCardWrapper> */}
    </Page>
   
  )
}
 
export default Swap
