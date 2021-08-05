import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import moment from 'moment'
import axios from 'axios';



const data = [
	{
		time: moment.utc(),
		traded: 0.9538,
		price: 0.9538,
		value: 1.9538,
		dex: 'PCSv2',
	},
	{
		time: moment.utc().subtract(1, 'hour'),
		traded: 0.9538,
		price: 0.9538,
		value: 1.9538,
		dex: 'PCSv2',
	},
	{
		time: new Date(),
		traded: 0.9538,
		price: 0.9538,
		value: 1.9538,
		dex: 'PCSv2',
	},
	{
		time: moment.utc().subtract(1, 'hour'),
		traded: 0.9538,
		price: 0.9538,
		value: 1.9538,
		dex: 'PCSv2',
	},
	{
		time: new Date(),
		traded: 0.9538,
		price: 0.9538,
		value: 1.9538,
		dex: 'PCSv2',
	}
];

const TableWrapper = styled.div`
	background: rgba(0, 0, 0, 0.4);
	border-radius: 8px;
	height: 100%;
	& table {
		background: transparent;
		width: 100%;
		& tr {
			background: transparent;
		}
		& td {
			padding: 8px;
		}
		& thead {
			& td {
				color: white;
				font-size: 16px;
				border-bottom: 1px solid white;
				padding: 16px 8px;
				& > div > div {
					font-size: 16px;
					font-weight: 500;
				}
			}
		}
		& tbody {
			& tr {
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				& h2 {
					font-size: 14px;
					line-height: 16px;
					font-weight: bold;
					&.success {
						color: #00AC1C;
					}
					&.error {
						color: #EA3943;
					}
				}	
			}
		}
	}
`

const ArrowDown = styled.div`
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 10px solid #EA3943;
	margin-right: 4px;
`

const ArrowUp = styled.div`
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 10px solid #00AC1C;
	margin-right: 4px;
`

// export interface TransactionCardProps {
//   tokenName: string,
//   contract: string
// }
// 0x016c285d5b918b92aa85ef1e147498badfe30d69

const TransactionCard = () => {


	const { account, activate, deactivate } = useWeb3React()
	
	const [tableData,setTableData]=useState([]);
	// const [data, setData] =useState ([]);
	const input= localStorage.getItem('InputAddress');

	console.log("inputin table",input)

      

   const Get_data = `
    {
        ethereum(network: bsc){
            dexTrades(options:{desc: ["block.height","tradeIndex"], limit: 10, offset: 0},
              date: {since: "2021-08-03" till: null }
              baseCurrency: {is: "${input}"}
              ) {
                block {
                  timestamp {
                    time (format: "%Y-%m-%d %H:%M:%S")
                  }
                  height
                }
                tradeIndex
                protocol
                exchange {
                  fullName
                }
                smartContract {
                  address {
                    address
                    annotation
                  }
                }
                baseAmount
                baseCurrency {
                  address
                  symbol
                }
                quoteAmount
                quoteCurrency {
                  address
                  symbol
                }
                transaction {
                  hash
                }
            }
          }
    }`

    const fetchData = async () =>{
		if(input){
			const queryResult= await axios.post('https://graphql.bitquery.io/',{query: Get_data});
			if(queryResult.data.data)
			setTableData(queryResult.data.data.ethereum.dexTrades)

		}
       
    }
    useEffect(()=>{
        fetchData();
		  // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[input])
 
  
  
       
      const table_data=tableData.map((val:any) => {
				return(
					<tr>
			<td>
				<Flex alignItems='center'>{ moment().diff(moment(val.time), 'minute') >= 1 ? <ArrowDown /> : <ArrowUp /> }<h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ moment().diff(moment(val.time), 'minute') >= 1 ? moment(val.time).utc().fromNow() : 'just now' }</h2></Flex>
			</td>
			<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.baseAmount }</h2></td>
			<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.baseAmount}</h2></td>
			<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.quoteAmount }</h2></td>
			<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.exchange.fullName }</h2></td>
		</tr>

				)			
		
				})


				console.log("trades::::" , tableData)




  const [hideDirector, setHideDirector] = React.useState(false);
    
//   const [alldata, setalldata] = useState([]);  

// useEffect(() => {
//     axios.fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(res=>res.json()
// 	.then()

// 	})
// }, [])
  

  const fixedHeader = true

  return (
		<TableWrapper>
			<table>
				<thead>
					<tr>
						<td>Time</td>
						<td>Traded Tokens</td>
						<td>Token Price</td>
						<td>BNB Value</td>
						<td>DEX</td>
					</tr>
				</thead>
				<tbody>
					{table_data}
				</tbody>
			</table>
		</TableWrapper>
  )
}

export default TransactionCard
