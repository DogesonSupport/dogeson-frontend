import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from 'assets/svg/icon/SearchIcon.svg'
import { ReactComponent as EmptyAvatar } from 'assets/svg/icon/EmptyAvatar.svg'
import { ReactComponent as ChevronDown } from 'assets/svg/icon/ChevronDown.svg'
// import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
// import Farm from './Farm'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'

import Menu from '../components/Menu'

const AppWrapper = styled.div`
  display: flex;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 320px);
  padding: 0 30px;
  min-height: calc(100vh - 152px);
  align-items: center;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  background: #1A1A27;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`
const SearchWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  align-item: center;
  & input {
    background: transparent;
    box-shadow: none;
    border: none;
    margin-left: 8px;
    font-size: 20px;
    margin-top: -5px;
    outline: none;
    color: white;
    &::placeholder {
      color: white;
    }
  }
`

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    padding: 12px;
    border-radius: 6px;
    color: white;
    background: #3861FB;
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    margin-right: 24px;
  }
  & > div:last-child {
    display: flex;
    align-items: center;
    & p {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
      letter-spacing: 0.02em;
      color: white;
      margin: 0 4px 0 8px;
    }
  }
`

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  // const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  // const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  // const fileId = 6
  //
  // const credentials: Credentials = {
  //   token: apiKey
  // }
  //
  // const stringTranslationsApi = new StringTranslations(credentials)
  //
  // const getStoredLang = (storedLangCode: string) => {
  //   return allLanguages.filter(language => {
  //     return language.code === storedLangCode
  //   })[0]
  // }

  // useEffect(() => {
  //   const storedLangCode = localStorage.getItem('pancakeSwapLanguage')
  //   if (storedLangCode) {
  //     const storedLang = getStoredLang(storedLangCode)
  //     setSelectedLanguage(storedLang)
  //   } else {
  //     setSelectedLanguage(EN)
  //   }
  // }, [])
  //
  // const fetchTranslationsForSelectedLanguage = async () => {
  //   stringTranslationsApi
  //     .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
  //     .then(translationApiResponse => {
  //       if (translationApiResponse.data.length < 1) {
  //         setTranslations(['error'])
  //       } else {
  //         setTranslations(translationApiResponse.data)
  //       }
  //     })
  //     .then(() => setTranslatedLanguage(selectedLanguage))
  //     .catch(error => {
  //       setTranslations(['error'])
  //       console.error(error)
  //     })
  // }
  //
  // useEffect(() => {
  //   if (selectedLanguage) {
  //     fetchTranslationsForSelectedLanguage()
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedLanguage])

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              <Menu />
              <BodyWrapper>
                <Popups />
                <TopBar>
                  <SearchWrapper>
                    <SearchIcon />
                    <input placeholder='Search Data' />
                  </SearchWrapper>
                  <AccountWrapper>
                    <div>Connected</div>
                    <div>
                      <EmptyAvatar />
                      <p>8258e1966...</p>
                      <ChevronDown />
                    </div>
                  </AccountWrapper>
                </TopBar>
                <Web3ReactManager>
                  <Switch>
                    <Route exact strict path='/swap' component={Swap} />
                    <Route exact strict path='/swap/:outputCurrency' component={RedirectToSwap} />
                    <Route exact strict path='/send' component={RedirectPathToSwapOnly} />
                    <Route exact strict path='/find' component={PoolFinder} />
                    <Route exact strict path='/pool' component={Pool} />
                    <Route exact strict path='/create' component={RedirectToAddLiquidity} />
                    <Route exact path='/add' component={AddLiquidity} />
                    <Route exact path='/add/:currencyIdA' component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path='/add/:currencyIdA/:currencyIdB' component={RedirectDuplicateTokenIds} />
                    <Route exact strict path='/remove/v1/:address' component={RemoveV1Exchange} />
                    <Route exact strict path='/remove/:tokens' component={RedirectOldRemoveLiquidityPathStructure} />
                    <Route exact strict path='/remove/:currencyIdA/:currencyIdB' component={RemoveLiquidity} />
                    <Route exact strict path='/migrate/v1' component={MigrateV1} />
                    <Route exact strict path='/migrate/v1/:address' component={MigrateV1Exchange} />
                    <Route component={RedirectPathToSwapOnly} />
                  </Switch>
                </Web3ReactManager>
                <Marginer />
              </BodyWrapper>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
