import React from 'react'
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
  margin-right: 20px;
  & p {
    color: #F7931A;
    font-size: 16px;
  }
`

const SocialIconsWrapper = styled.div`
  display: flex;
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

  return (
    <>
      <Flex justifyContent="flex-end" mb="30px">
        <CopyHelper toCopy={token ? token.contractAddress : '0xB09FE1613fE03E7361319d2a43eDc17422f36B09'}>
          &nbsp;
        </CopyHelper>
        <ContractCard>
          <p>{token ? token.contractAddress : '0xB09FE1613fE03E7361319d2a43eDc17422f36B09'}</p>
        </ContractCard>
        <SocialIconsWrapper>
          <TwitterIcon />
          <SocialIcon2 />
          <TelegramIcon />
        </SocialIconsWrapper>
      </Flex>
    </>
  )
}