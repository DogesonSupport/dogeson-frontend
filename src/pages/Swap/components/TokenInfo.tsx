import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { ReactComponent as MoreIcon2 } from 'assets/svg/icon/MoreIcon2.svg' 
import numeral from 'numeral'
import { TokenDetailProps } from './types'

const TextWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  word-break: break-all;
  & > div:first-child {
    color: white;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
  }
  & > div:last-child {
    font-size: 14px;
    line-height: 16px;
    color: #ADB5BD;
    margin-top: 2px;
  }
`

const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  & > img,
  span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

const TokenInfoContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`

export default function TokenInfo({
  tokenInfo
}: {
  tokenInfo?: TokenDetailProps | null
}) {
  return (
    <TokenInfoContainer>
      <Flex alignItems="center" justifyContent='space-between'>
        <Flex alignItems='center'>
          {
            tokenInfo ?
              <IconWrapper size={32}>
                <img src={tokenInfo.iconSmall} alt="Coin icon" />
              </IconWrapper>
              : <></>
          }
          <Text color='white'>{tokenInfo ? tokenInfo.name : ''}</Text>
        </Flex>
        <Flex style={{ width: 40 }}>
          <MoreIcon2 />
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <TextWrapper>
          <Text>Total Supply</Text>
          <Text>{tokenInfo ? numeral(tokenInfo.totalSupply).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Market Cap:<span style={{ fontSize: '70%' }}>(includes locked, excludes burned)</span></Text>
          <Text>{tokenInfo ? numeral(tokenInfo.marketCap).format('$0,0.00') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Pc v2| DOGESON/BNB LP Holdings:</Text>
          <Text>{tokenInfo ? `${numeral(tokenInfo.bnbLPHoldings).format('0,0')} BNB` : ''}({tokenInfo ? `${numeral(tokenInfo.bnbLPHoldingsUSD).format('0,0')}` : ''})|Chart|Holders
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Transactions</Text>
          <Text>{tokenInfo ? numeral(tokenInfo?.transactions).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Contract Address</Text>
          <Text>{tokenInfo ? tokenInfo.contractAddress : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Holders</Text>
          <Text>{tokenInfo ? numeral(tokenInfo.holders).format('0,0') : ''}</Text>
        </TextWrapper>
      </Flex>
    </TokenInfoContainer>
  )
}
