import React, {useEffect,useState, useContext } from 'react'
import {utils} from "ethers";
import styled, { ThemeContext } from 'styled-components'
import { Text, Flex } from '@pancakeswap-libs/uikit'
import numeral from 'numeral'
import axios from 'axios';
import { useSelector } from 'react-redux';
import Column, { AutoColumn } from '../../../components/Column'
import { RowBetween } from '../../../components/Row'
import { AppDispatch, AppState } from '../../../state'
import { TokenDetailProps } from './types'

const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  & > img,
  height: ${({ size }) => (size ? `${size}px` : '32px')};
  width: ${({ size }) => (size ? `${size}px` : '32px')};
  span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 12px 12px 0px 0px;
  padding: 12px;
  display: flex;
  flex-direction: column;

  & > div {
    margin: 0 0 12px;
    & > div, & > div > div > div {
      &:first-child {
        color: white;
        font-size: 16px;
        line-height: 19px;
        font-weight: 500;
        margin-bottom: 2px;
      }
      &:last-child {
        color: #ADB5BD;
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
      }
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }
`

export default function CoinStatsBoard() {
  const theme = useContext(ThemeContext)

  const input = useSelector<AppState, AppState['inputReducer']>((state) => state.inputReducer.input);
  // console.log("input in marketcap==========",input);
  const [alldata, setalldata] = useState({
    address : '',
    price : '',
    change : '',
    volume : '',
    liquidityV2 : '',
    liquidityV2BNB:''
  });

  const [linkIcon, setLinkIcon] = useState('https://r.poocoin.app/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png')

    // const pricedecimal=parseFloat(alldata.price).toFixed(5);
    const changedecimal=parseFloat(alldata.volume).toFixed(3);
    const volumedecimal=parseFloat(alldata.volume).toFixed(3);
    const liquidityV2decimal=parseFloat(alldata.liquidityV2).toFixed(3);
    const liquidityV2BNBdecimal=parseFloat(alldata.liquidityV2BNB).toFixed(3);
  // const [icon,setIcon]=useState({
  //   LinkIcon:""
  // })

  const getTableData =   () => {
    axios.post("https://api.sphynxswap.finance/chartStats",{address:input || "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82"})
        .then((response) => {
            setalldata(response.data)
            setLinkIcon(`https://r.poocoin.app/smartchain/assets/${input ? utils.getAddress(input) : '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'}/logo.png`);
        });
       }  
    // console.log("icon",icon)
    console.log("chartStats",alldata)
useEffect(() => {
  getTableData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[input])



  return (
    <StyledWrapper>
  
      <Column>
        <Flex>
        {/* { */}
          {/* tokenInfo ? */}
            <IconWrapper size={32}>
              <img src={linkIcon} alt="Coin icon" />
            </IconWrapper>
        <div>
          <Text>Coin</Text>
          <Text>{!input?'0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82':input}</Text>
        </div>
        </Flex>
      </Column>
      <Column>
        <Text>Price</Text>
        <Text>$ {alldata.price}</Text>
      </Column>
      <Column>
        <Text>24h Change</Text>
        {/* {tokenInfo ? `${tokenInfo.priceChange24H.toFixed(2)}%` : ''} */}
        {/* <h2 className={  changedecimal>  0 ? 'success':'error'}> {changedecimal }</h2> */}
        <Text>{changedecimal}</Text>
      </Column>
      <Column>
        <Text>24h Volume</Text>
        {/* {tokenInfo ? numeral(tokenInfo.volumne24H).format('0,0.00') : ''} */}
        <Text>$ {volumedecimal}</Text>
      </Column>
      <Column>
        <Text>Liquidity</Text>
        {/* {tokenInfo ? numeral(tokenInfo.liquidity).format('$0,0.00') : ''} */}
        <Text style={{color:'white'}}> $ {liquidityV2decimal}</Text>
        <Text>BNB {liquidityV2BNBdecimal} </Text>
        {/* <Text> $ {alldata.liquidityV2}</Text> */}
      </Column>
   

          
    
    </StyledWrapper>
  )
}
