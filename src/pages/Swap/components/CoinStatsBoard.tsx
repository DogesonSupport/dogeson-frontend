import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import numeral from 'numeral'
import Column, { AutoColumn } from '../../../components/Column'
import { RowBetween } from '../../../components/Row'
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

  & > div > div {
    & > div {
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
`

export default function CoinStatsBoard({
  tokenInfo
}: {
  tokenInfo?: TokenDetailProps | null
}) {
  const theme = useContext(ThemeContext)

  return (
    <StyledWrapper>
      <RowBetween style={{ textAlign: 'center' }}>
        {
          tokenInfo ?
            <IconWrapper size={32}>
              <img src={tokenInfo.iconSmall} alt="Coin icon" />
            </IconWrapper>
            : <></>
        }
        <Column>
          <Text>Coin</Text>
          <Text>{tokenInfo ? tokenInfo.name : ''}</Text>
        </Column>
        <Column>
          <Text>Price</Text>
          <Text>{tokenInfo ? tokenInfo.price : ''}</Text>
        </Column>
        <Column>
          <Text>24h Change</Text>
          <Text>{tokenInfo ? `${tokenInfo.priceChange24H.toFixed(2)}%` : ''}</Text>
        </Column>
        <Column>
          <Text>24h Volume</Text>
          <Text>{tokenInfo ? numeral(tokenInfo.volumne24H).format('0,0.00') : ''}</Text>
        </Column>
        <Column>
          <Text>Liquidity</Text>
          <Text>{tokenInfo ? numeral(tokenInfo.liquidity).format('$0,0.00') : ''}</Text>
        </Column>
        <Column>
          <Text>MarketCap</Text>
          <Text>{tokenInfo ? numeral(tokenInfo.marketCap).format('$0,0.00') : ''}</Text>
        </Column>
      </RowBetween>
    </StyledWrapper>
  )
}
