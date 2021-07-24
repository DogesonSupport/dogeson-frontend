import React from 'react'
import styled from 'styled-components'
import { Flex, Link } from '@pancakeswap-libs/uikit'
import Marquee from "react-fast-marquee";
import { HotTokenType } from './types'

export interface HotTokenBarProps {
  tokens?: HotTokenType[] | null
}

const StyledBar = styled.div`
  width: 100%;
  border
`

const FlowBar = styled.div`
  flex: 1;
  background-color: rgba(0,0,0,0.2);
  border-radius: 0px 12px 12px 0px;
  padding: 6px;
`

const BarIntro = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  padding-left: 12px;
  padding-top: 0;
  font-size: 12px;
  color: #fff;
  padding-right: 24px;
  background-color: ${({theme}) => theme.card.background};
  border-radius: 12px 0px 0px 12px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-left: 1rem;
  &:hover {
    text-decoration: none;
  }
`;

const RankingColor = [
  '#F7931A',
  '#ACACAC',
  '#6E441E',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5',
  '#C5C5C5'
]

const HotToken = ({
  index,
  dexId,
  name,
  symbol
}: {
  index: number,
  dexId: string,
  name: string,
  symbol: string
}) => {
  const Ranking = styled.span<{
    index1: number
  }>`
    padding-right: 12px;
    color: ${({index1}) => RankingColor[index1 - 1]};
  `
  return (
    <StyledLink href={`/#/swap/${dexId}`} fontSize="14px">
      <Ranking index1={index}>#{index}</Ranking>
      <span style={{ color: '#fff', fontWeight: 400 }}>{name}</span>
    </StyledLink>
  )
}

export default function HotTokenBar({
  tokens
}: HotTokenBarProps) {
  return (
    <Flex mb="30px">
      <BarIntro>Top Bar</BarIntro>
      <FlowBar>
        <div style={{width: 'calc(100% - 120px)'}}>
          <Marquee gradient={false}>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', width: 'calc(100% - 120px)' }}>
            {
              tokens ? tokens.map((token, key) => {
                return (
                  <li>
                    <HotToken
                      index={key + 1}
                      dexId={token.dexId}
                      symbol={token.symbol}
                      name={token.name}
                    />
                  </li>
                )
              }) : <></>
            }
            </ul>
          </Marquee>
        </div>
      </FlowBar>
      <div className="paddingRight: 30px" />
    </Flex>
  )
}
