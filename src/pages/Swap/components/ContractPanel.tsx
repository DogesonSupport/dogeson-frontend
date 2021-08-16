import React, { useState } from 'react'
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
import Web3 from 'web3';
import { useDispatch } from 'react-redux'
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
  & input {
    background: transparent;
    border: none;
    flex: 1;
    overflow: hidden;
    box-shadow: none;
    outline: none;
    color: #F7931A;
    font-size: 16px;
    &::placeholder {
      color: red
    }
  }
  & button:last-child {
    background: #8B2A9B;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    & input {
      min-width: 420px;
    }
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
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
export default function ContractPanel({ value }: ContractPanelProps) {

  const [addressSearch, setAddressSearch] = useState('');
  const [show,setShow]=useState(true)

  // eslint-disable-next-line no-console
  // console.log("result===============================>",result)  // => true
  const dispatch = useDispatch();
  const handlerChange = (e:any) => {
      const result = Web3.utils.isAddress(e.target.value)
      if(result){
        setAddressSearch(e.target.value)
        setShow(false);
      }
      else{
        setAddressSearch(e.target.value)
        setShow(true);
      }
  }  



  return (
    <>
      <ContractPanelWrapper>
        <ContractCard>
          <CopyHelper toCopy={value ? value.contractAddress : addressSearch}>
            &nbsp;
          </CopyHelper>
          <input placeholder='' value={addressSearch} onChange={handlerChange} />
          <Button size='sm' onClick={() => dispatch(typeInput({ input: addressSearch }))} disabled={show} >Submit</Button>
        </ContractCard>
        <SocialIconsWrapper>
          <TwitterIcon />
          <SocialIcon2 />
          <TelegramIcon />
        </SocialIconsWrapper>
      </ContractPanelWrapper>
    </>

  )
}



