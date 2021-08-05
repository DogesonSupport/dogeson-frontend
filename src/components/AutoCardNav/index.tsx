import React, { useState } from 'react'
import styled from 'styled-components'
import { useSetVersion } from 'state/application/hooks'
import { Version } from 'hooks/useToggledVersion'
import { ButtonMenu, ButtonMenuItem, Button } from '@pancakeswap-libs/uikit'
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
      background: #8B2A9B !important;
      color: white;  
    }
  }
`

const AutoNav = () => {
  const { setVersion } = useSetVersion()
  const [ activeIndex, setActiveIndex ] = useState(0)
  return (
  <StyledNav>
    <Button className={activeIndex === 0 ? 'active' : ''} id="auto-nav-link" onClick={() => { setVersion(Version.v2); setActiveIndex(0) }}>
      <TranslatedText translationId={8}>AUTO</TranslatedText>
    </Button>
    <Button className={activeIndex === 1 ? 'active' : ''} id="dgsn-nav-link" onClick={() => { setVersion(Version.v1); setActiveIndex(1) }}>
      <TranslatedText translationId={74}>DGSNLP</TranslatedText>
    </Button>
    <Button className={activeIndex === 2 ? 'active' : ''} id="pcv-nav-link" onClick={() => { setVersion(Version.v2); setActiveIndex(2) }}>
      <TranslatedText translationId={74}>PCV2</TranslatedText>
    </Button>
  </StyledNav>
)}

export default AutoNav
