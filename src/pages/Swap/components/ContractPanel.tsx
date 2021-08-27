/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Text, Button } from '@pancakeswap-libs/uikit'
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as TwitterIcon } from 'assets/svg/icon/TwitterIcon.svg'
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as SocialIcon2 } from 'assets/svg/icon/SocialIcon2.svg'
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as TelegramIcon } from 'assets/svg/icon/TelegramIcon.svg'
// eslint-disable-next-line import/no-unresolved
import CopyHelper from 'components/AccountDetails/Copy'
import Loader from 'components/myLoader/Loader'
// eslint-disable-next-line import/no-unresolved
import './dropdown.css'

import axios from 'axios'
import {utils} from "ethers";
import { Button as materialButton, Menu, MenuItem } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Web3 from 'web3';
import { useDispatch,useSelector } from 'react-redux'
import {  AppState } from '../../../state'
import { typeInput } from '../../../state/input/actions'


export interface ContractPanelProps {
  value: any
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

const ContractCard = styled(Text)`
  padding: 0 4px;
  height: 40px;
  text-overflow: ellipsis;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  display: flex;
  align-items: center;
  margin: 12px 0;
  & button:last-child {
    background: #8B2A9B;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`
const MenuWrapper = styled.div`
  position: absolute;
  width: 100%;
  background: #131313;
  color: #eee;
  margin-top: 12px;
  overflow-y: auto;
  max-height: 100vh;
  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 600px;
  }
`
const SearchInputWrapper = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 420px;
  }
  & input {
    background: transparent;
    border: none;
    width: 100%;
    box-shadow: none;
    outline: none;
    color: #F7931A;
    font-size: 16px;
    &::placeholder {
      color: red
    }
  }
`

const SocialIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  & svg {
    margin: 0 11px;
  }
`

const ContractPanelOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`

export default function ContractPanel({ value }: ContractPanelProps) {

  const [addressSearch, setAddressSearch] = useState('');
  const [show, setShow] = useState(true)
  // const [showDrop, setshowDrop] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const input = useSelector<AppState, AppState['inputReducer']>((state) => state.inputReducer.input);

  const checksumAddress= utils.getAddress(input)
  // eslint-disable-next-line no-console
  const [data, setdata] = useState([])
  const dispatch = useDispatch();
  const [website,setWebsite]=useState('');

  const getWebsite=async()=>{
      const web:any=await axios.get(`https://api.sphynxswap.finance/socials/${checksumAddress}`);
      console.log("web===============>",web)
      setWebsite(web.data.data.website);
  }

  const handlerChange = (e: any) => {

    try {

      axios.get(`https://api.sphynxswap.finance/search/${e.target.value}`)
        .then((response) => {
          // setalldata(response.data)
          // console.log("response",response.data);
          setdata(response.data);

        })
    }


    catch (err) {
      // eslint-disable-next-line no-console
      // console.log(err);
      // alert("Invalid Address")


    }


    const result = Web3.utils.isAddress(e.target.value)
    if (result) {
      setAddressSearch(e.target.value)
      setShow(false);
    }
    else {
      setAddressSearch(e.target.value)
      setShow(true);
    }
  }
  // const DropDownShow = () => {
  //   setshowDrop(true)
  // }


  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setShowDrop(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const submitFuntioncall = () => {
    dispatch(typeInput({ input: addressSearch }))
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      submitFuntioncall();
    }
  }


  //  useEffect(()=>{
  //   getWebsite();
  //  // eslint-disable-next-line react-hooks/exhaustive-deps
  //  },[input])


  useEffect(() => {
    getWebsite();
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        // console.log("Enter key was pressed. Run your function.");
        // callMyFunction();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
   
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checksumAddress ]);

  return (
    <>
    
      <ContractPanelWrapper>
        <ContractCard>
          <CopyHelper toCopy={value ? value.contractAddress : addressSearch}>
            &nbsp;
          </CopyHelper>
          <SearchInputWrapper>
            <input placeholder='' value={addressSearch} onFocus={() => setShowDrop(true)} onKeyPress={handleKeyPress} onChange={handlerChange} />
            {
            showDrop &&
            <MenuWrapper>
              {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <ArrowDropDownIcon />
              </Button> */}
              {data.length > 0 ?
                <span>
                  {data?.map((item: any) => {
                    return <MenuItem onClick={() => { dispatch(typeInput({ input: item.address })) }}>{item.name}<br />{item.symbol}<br />{item.address}</MenuItem>
                  })}

                </span> :
                <span style={{ padding: '0 16px' }}>no record</span>}
            </MenuWrapper>
            }
          </SearchInputWrapper>
          <Button size='sm' onClick={submitFuntioncall} disabled={show} >Submit</Button>
        </ContractCard>
        <SocialIconsWrapper>
          <a href="https://mobile.twitter.com/sphynxswap" target="blank"><TwitterIcon /></a>
          <a href={website}  target="blank"><SocialIcon2 /></a>
          <a href="https://t.me/sphynxswap" target="blank"><TelegramIcon /></a>
        </SocialIconsWrapper>
        { showDrop && <ContractPanelOverlay onClick={() => setShowDrop(false) } />}
      </ContractPanelWrapper>
    </>

  )
}



