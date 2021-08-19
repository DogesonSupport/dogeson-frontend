import React,{useState,useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { ReactComponent as MoreIcon2 } from 'assets/svg/icon/MoreIcon2.svg' 
import ConnectWalletButton from 'components/ConnectWalletButton'

import axios from 'axios';

// eslint-disable-next-line import/no-cycle


// import { TokenDetailProps } from './types'

const TextWrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 12px 20px;
  word-break: break-all;
  & > div:first-child {
    color: white;
    font-size: 16px;
    line-height: 19px;
    font-weight: 500;
  }
  & > div:last-child {
    font-size: 14px;
    line-height: 16px;
    color: #ADB5BD;
    margin-top: 2px;
  }
`



const IconWrapper = styled.div<{ size?: number }>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  & > 
  span {
    height: ${({ size }) => (size ? `${size}px` : '32px')};
    width: ${({ size }) => (size ? `${size}px` : '32px')};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: flex-end;
  }
`

const TokenInfoContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  border:1px solid yellow;
  margin: 12px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`
 const BottomGrouping = styled.div`
  margin-top: 1rem;
  & button {
    background: #8b2a9b;
  }
`
// {tokenInfo}: {tokenInfo?: TokenDetailProps | null}
export default function Staking() {
  
  //  const input= localStorage.getItem('InputAddress');

  // const [alldata, setalldata] = useState({
  //   holders : '',
  //   txs : '',
  //   marketCap : '',
  //   symbol : '',
  //   totalSupply : ''
  // });

  // const getTableData =   () => {
  //   axios.post("http://192.168.18.65:8080/tokenStats",{address:input || "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"})
  //       .then((response) => {
  //           setalldata(response.data)
  //       });
  //      }  
     

// useEffect(() => {

//   getTableData();
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])
  
  return (
    <TokenInfoContainer>
    <Flex alignItems="center" justifyContent='space-between'>
        <Flex alignItems='center'>
    
              <IconWrapper size={32}>
              <Text style={{fontSize:30,color:'white',fontWeight:600}}>Farms & Staking</Text>
                {/* <Text>{alldata.symbol}</Text>  */}
              </IconWrapper>
           
        </Flex>
        <Flex style={{ width: 40 }}>
          <MoreIcon2 />
          {/* <Text>Token Info</Text> */}
        </Flex>
      </Flex>
      <Flex flexDirection="column">
      <TextWrapper>
        <div style={{textAlign:'center'}}>
        <img src='sliderImg/locked-220x220.png' alt="lock"/>
        </div>
     
        </TextWrapper>
        <TextWrapper> 
          <BottomGrouping>
            <div style={{marginBottom:12,marginTop:12}} >
            <ConnectWalletButton fullWidth />
            </div>
         
          </BottomGrouping>
      
        </TextWrapper>
       
          
         
      
       
      </Flex>
    </TokenInfoContainer>
  )
}
