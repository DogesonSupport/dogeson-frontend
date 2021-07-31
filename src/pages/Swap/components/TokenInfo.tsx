import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Flex, Text } from '@pancakeswap-libs/uikit'
import { ReactComponent as MoreIcon2 } from 'assets/svg/icon/MoreIcon2.svg' 
import numeral from 'numeral'
import axios from 'axios';
import { idText } from 'typescript'
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
export default function TokenInfo() {

  const [alldata, setalldata] = useState([]);
  const getTableData = () => {
    axios.get("http://ec2-34-220-133-56.us-west-2.compute.amazonaws.com:1337/approvals")
        .then((response) => {
            console.log("response", response.data.approvals);
            setalldata(response.data.approvals)

        })
        .catch((error) => { console.log("Error", error); })

       }  
       const table_data = alldata.map((elem, index) => {
        const { id, txHash, approvedFrom, approvedTo, amount, createdAt } = elem;

        return (
            <>
        <Flex alignItems="center" justifyContent='space-between'>
        <Flex alignItems='center'>
          {/* { */}
            {/* tokenInfo ? */}
              <IconWrapper size={32}>
                <img src={id} alt="Coin icon" />
              </IconWrapper>
              {/* :  */}
          {/* } */}
          <Text color='white'>{id ? createdAt : ''}</Text>
        </Flex>
        <Flex style={{ width: 40 }}>
          <MoreIcon2 />
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <TextWrapper>
          <Text>Total Supply</Text>
          <Text>{id ? numeral(amount).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Market Cap:<span style={{ fontSize: '70%' }}>(includes locked, excludes burned)</span></Text>
          <Text>{id ? numeral(approvedFrom).format('$0,0.00') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Pc v2| DOGESON/BNB LP Holdings:</Text>
          <Text>{id ? `${numeral(idText).format('0,0')} BNB` : ''}({id ? `${numeral(id).format('0,0')}` : ''})|Chart|Holders
          </Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Transactions</Text>
          <Text>{id ? numeral(id).format('0,0') : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Contract Address</Text>
          <Text>{id ? approvedTo : ''}</Text>
        </TextWrapper>
        <TextWrapper>
          <Text>Holders</Text>
          <Text>{amount ? numeral(amount).format('0,0') : ''}</Text>
        </TextWrapper>
      </Flex>
            

            </>
        )
    })



      

useEffect(() => {
  getTableData();
}, [])
  
  return (
    <TokenInfoContainer>
     {table_data}
    </TokenInfoContainer>
  )
}
