import React from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import numeral from 'numeral'
import AppBody from '../../AppBody'
import { TokenDetailProps } from './types'

const TextWrapper = styled.div`
  border-top: 1px solid ${({theme}) => theme.colors.tertiary};
  padding: 12px 20px;
  word-break: break-all;
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

export default function TokenInfo({
  tokenInfo
}: {
  tokenInfo?: TokenDetailProps | null
}) {
  return (
    <AppBody>
      <Flex alignItems="center">
        {
          tokenInfo ?
            <IconWrapper size={32}>
              <img src={tokenInfo.iconSmall} alt="Coin icon" />
            </IconWrapper>
            : <></>
        }
        <Text>{tokenInfo ? tokenInfo.name : ''}</Text>
      </Flex>
      <Flex flexDirection="column">
        <TextWrapper>
          <Text><div>Total Supply</div>{tokenInfo ? numeral(tokenInfo.totalSupply).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text><div>Market Cap:<span style={{ fontSize: '70%' }}>(includes locked, excludes burned)</span></div>{tokenInfo ? numeral(tokenInfo.marketCap).format('$0,0.00') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>
          Pc v2| DOGESON/BNB LP Holdings: <div>{tokenInfo ? `${numeral(tokenInfo.bnbLPHoldings).format('0,0')} BNB` : ''}({tokenInfo ? `${numeral(tokenInfo.bnbLPHoldingsUSD).format('0,0')}` : ''})|Chart|Holders</div>
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Transactions: {tokenInfo ? numeral(tokenInfo?.transactions).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>{tokenInfo ? tokenInfo.contractAddress : 'Contract Address: '}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Holders: {tokenInfo ? numeral(tokenInfo.holders).format('0,0') : ''}</Text>
        </TextWrapper>
      </Flex>
    </AppBody>
  )
}
