import React,{useState,useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { ReactComponent as MoreIcon2 } from 'assets/svg/icon/MoreIcon2.svg' 

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
  & > img,
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
  margin: 12px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
`
// {tokenInfo}: {tokenInfo?: TokenDetailProps | null}
export default function TokenInfoHome() {
  
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
              <Text style={{color:'white'}}>Token Info</Text>
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
          <Text>Total Supply</Text>
          {/* <Text>{ alldata.totalSupply}</Text> */}
          <Text>1000000000,000000</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Market Cap:<span style={{ fontSize: '70%' }}>(includes locked, excludes burned)</span></Text>
          {/* <Text>{alldata.marketCap}</Text> */}
          <Text>$141,51</Text>
        </TextWrapper>
          <TextWrapper>
          <Text>Pc v2| DOGESON/BNB LP Holdings:</Text>
          {/* <Text>{alldata.txs})|Chart|Holders
          </Text> */}
          <Text>140.07 BNB ($40,546) |Chart|Holders
          </Text>
        </TextWrapper>
          <TextWrapper>
          <Text>SPHYNX Transactions</Text> 
          {/* <Text>{alldata.txs}</Text> */}
          <Text>123,5778,77</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>SPHYNX Contract</Text>
          {/* <Text>{input}</Text> */}
          <Text>0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>SPHYNX Holders</Text>
          {/* <Text>{alldata.holders}</Text> */}
          <Text>56371,5788</Text>
        </TextWrapper>
      </Flex>
    </TokenInfoContainer>
  )
}
