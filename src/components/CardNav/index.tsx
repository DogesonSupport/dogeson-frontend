import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  text-align: center;
  & a {
    color: black;
  }
  & .active {
    background: #882A9B;
    color: white;
  }
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="primary">
      <ButtonMenuItem className={activeIndex === 0 ? 'active' : ''} id="swap-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>Swap</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem className={activeIndex === 1 ? 'active' : ''} id="pool-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>Liquidity</TranslatedText>
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
