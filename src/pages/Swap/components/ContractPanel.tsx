import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from '@pancakeswap-libs/uikit'
import { ReactComponent as TwitterIcon } from 'assets/svg/icon/TwitterIcon.svg'
import { ReactComponent as SocialIcon2 } from 'assets/svg/icon/SocialIcon2.svg'
import { ReactComponent as TelegramIcon } from 'assets/svg/icon/TelegramIcon.svg'
import CopyHelper from 'components/AccountDetails/Copy'
import { TokenDetailProps } from './types'

export interface ContractPanelProps {
  token?: TokenDetailProps | null
}

const ContractPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;   
  }
`

const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-left: 36px;
  height: ${({ size }) => (size ? `${size}px` : '32px')};
  width: ${({ size }) => (size ? `${size}px` : '32px')};
  & > img, span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

const ContractCard = styled(Text)`
  padding: 0 12px;
  height: 48px;
  text-overflow: ellipsis;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin: 12px 0;
  & input {
    background: transparent;
    border: none;
    flex: 1;
    overflow: hidden;
    box-shadow: none;
    outline: none;
    color: #F7931A;
    font-size: 16px;
    &::placeholder {
      color: #F7931A;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & input {
      min-width: 300px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  & svg {
    margin: 0 11px;
  }
`

export default function ContractPanel({
  token
} : ContractPanelProps) {

  const [ addressSearch, setAddressSearch ] = useState('');

  return (
    <ContractPanelWrapper>
      <ContractCard>
        <CopyHelper toCopy={token ? token.contractAddress : addressSearch}>
          &nbsp;
        </CopyHelper>
        <input placeholder='0xB09FE1613fE03E7361319d2a43eDc17422f36B09' value={addressSearch} onChange={(e) => { setAddressSearch(e.target.value)}} />
      </ContractCard>
      <SocialIconsWrapper>
        <TwitterIcon />
        <SocialIcon2 />
        <TelegramIcon />
      </SocialIconsWrapper>
    </ContractPanelWrapper>
  )
}