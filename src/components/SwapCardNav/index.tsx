import React from 'react'
import styled from 'styled-components'
import { useSwapType } from 'state/application/hooks'
import { Button } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  text-align: center;
  display: flex;
  height: 32px;
  background: white;
  border-radius: 16px;
  & button {
    color: black;
    height: 32px;
    background: transparent;
    border: none;
    box-shadow: none !important;
    outline: none;
    &:hover, &.active {
      background: #8b2a9b !important;
      color: white;  
    }
  }
`

const SwapCardNav = () => {
  const { swapType, setSwapType } = useSwapType();
  return (
  <StyledNav>
    <Button className={swapType === 'swap' ? 'active' : ''} id="auto-nav-link" onClick={() => { setSwapType('swap') }}>
      <TranslatedText translationId={8}>Swap</TranslatedText>
    </Button>
    <Button className={swapType === 'liquidity' ? 'active' : ''} id="dgsn-nav-link" onClick={() => { setSwapType('liquidity') }}>
      <TranslatedText translationId={74}>Liquidity</TranslatedText>
    </Button>
  </StyledNav>
)}

export default SwapCardNav
