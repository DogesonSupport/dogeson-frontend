/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'
// import {  Link } from '@pancakeswap-libs/uikit'
import Marquee from "react-fast-marquee";
import { useDispatch } from 'react-redux';
// import ReactLoading from 'react-loading';
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import { ReactComponent as HelpIcon } from 'assets/svg/icon/HelpIcon.svg'
import { typeInput } from '../../../state/input/actions'
// eslint-disable-next-line import/no-unresolved
// import { ReactComponent as DownRedArrowIcon} from 'assets/svg/icon/DownRedArrowIcon.svg'
// eslint-disable-next-line import/no-unresolved
// import { ReactComponent as UpGreenArrowIcon} from 'assets/svg/icon/UpGreenArrowIcon.svg'
// import { HotTokenType } from './types'

// export interface HotTokenBarProps {
//   tokens?: HotTokenType[] | null
// }

const StyledBar = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  & span {
    font-family: 'Roboto Regular'
  }
`

const FlowBar = styled.div`
  width: calc(100% - 100px);
  background-color: rgba(0,0,0,0.2);
  border-radius: 0px 12px 12px 0px;
  padding: 6px;
`

const BarIntro = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  color: #fff;
  background-color: #101010;
  border-radius: 8px 0px 0px 8px;
  & span {
    font-size: 12px;
    line-height: 14px;
  }
`

// const StyledLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   width: fit-content;
//   margin-left: 16px;
//   &:hover {
//     text-decoration: none;
//   }
//   & svg {
//     margin-right: 8px;
//   }
//   & span:last-child {
//     font-weight: bold;
//     color: white;
//     text-transform: uppercase;
//   }
// `;

// const RankingColor = [
//   '#F7931A',
//   '#ACACAC',
//   '#6E441E',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5',
//   '#C5C5C5'
// ]

export default function HotTokenBar() {
   const [data,setData]=React.useState([{
     currency:{
       symbol:'',
       name:''
     }
   }])
  //  const [showLoader,setShowLoader]=React.useState(false);
   
   const dispatch = useDispatch();
  const date:any = new Date();
  date.setDate(date.getDate() - 13);
  console.log("data in hotbar==================================",data)
  const d:any = new Date()
  const Get_data = `
  {
    ethereum(network: bsc) {
      transfers(
        options: {desc: "count", limit: 15, offset: 0}
        amount: {gt: 0}
        date: {since: "${date.toISOString()}", till: "${d.toISOString()}"}
        currency: {notIn: ["BNB", "WBNB", "BTCB", "ETH", "BUSD", "USDT", "USDC", "DAI"]}
      ) {
        currency {
          symbol
          address
          name
        }
        count
        senders: count(uniq: senders)
        receivers: count(uniq: receivers)
        days: count(uniq: dates)
        from_date: minimum(of: date)
        till_date: maximum(of: date)
        amount
      }
    }
   
  }`
    

    const fetchData = async () => {
      try {
        // setShowLoader(true)
          // setLoader(true);
          const queryResult = await axios.post('https://graphql.bitquery.io/', { query: Get_data });
          console.log('bbb', queryResult)
          // setData(queryResult);
          if (queryResult.data.data){
          setData(queryResult.data.data.ethereum.transfers)
        //  setShowLoader(false)
      }
    }
      catch (err) {
        // eslint-disable-next-line no-console
        // alert("Invalid Address");
        // <Redirect to="/swap" />
  
      }
    }
    console.log("data in hotbar==================================",data)
   React.useEffect(()=>{
    fetchData()
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])

  return (

    <>
    <StyledBar>
      <BarIntro><span>Top Pairs</span> <HelpIcon /></BarIntro>
      <FlowBar>
        <Marquee gradient={false}>
          <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', width: 'calc(100% - 120px)' }}>
          {
             data.map((elem:any) => {
              return (
                <li style={{color:'white',padding:'20'}}>
                  < a href="##" style={{marginRight: 32,textDecoration:'none'}} 
                  onClick={()=> dispatch(typeInput({ input: elem.currency.address }))}
                  >{elem.currency.symbol}</a>
                </li>
              )
            })
          }
          </ul>
        </Marquee>
      </FlowBar>
      
      <div className="paddingRight: 30px" />
     
    </StyledBar>
     
     </>
  )
}


  //  {/* showLoader?
  //     <StyledBar>
  //     <BarIntro><span>Top Pairs</span> <HelpIcon /></BarIntro>
  //     <FlowBar>
  //   <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center'}}>
  //   <ReactLoading type="spin" color="green" height='2%' width='2%'  />
  // </div>
  //     </FlowBar>
 
  // </StyledBar>: */