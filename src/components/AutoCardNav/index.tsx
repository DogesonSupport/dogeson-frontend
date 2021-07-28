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
    background: #F9AC61;
    color: white;
  }
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => (
  <StyledNav>
    <ButtonMenu activeIndex={activeIndex} size="sm" variant="primary">
      <ButtonMenuItem className={activeIndex === 0 ? 'active' : ''} id="auto-nav-link" to="/swap" as={Link}>
        <TranslatedText translationId={8}>AUTO</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem className={activeIndex === 1 ? 'active' : ''} id="dgsn-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>DGSNLP</TranslatedText>
      </ButtonMenuItem>
      <ButtonMenuItem className={activeIndex === 1 ? 'active' : ''} id="pcv-nav-link" to="/pool" as={Link}>
        <TranslatedText translationId={74}>PCV2</TranslatedText>
      </ButtonMenuItem>
    </ButtonMenu>
  </StyledNav>
)

export default Nav
