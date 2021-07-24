import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Text } from '@pancakeswap-libs/uikit'
import TwitterIcon from '../../../assets/images/twitter.png'
import TelegramIcon from '../../../assets/images/telegram.png'
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

const ContractText = styled(Text)`
  color: ${({theme}) => theme.colors.primary};
  padding: 0.5rem 1rem;
  text-overflow: ellipsis;
`

export default function ContractPanel({
  token
} : ContractPanelProps) {

  return (
    <>
      <Flex justifyContent="space-between" mb="30px">
        <Card>
          <ContractText>{token ? token.contractAddress : ''}</ContractText>
        </Card>
        <Flex>
          <IconWrapper size={32}>
            <img src={TwitterIcon} alt="Twitter icon" />
          </IconWrapper>
          <IconWrapper size={32}>
            <img src={TelegramIcon} alt="Telegram icon" />
          </IconWrapper>
        </Flex>
      </Flex>
    </>
  )
}