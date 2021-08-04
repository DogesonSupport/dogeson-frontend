import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import moment from 'moment'
import axios from 'axios';
import DataTable, { createTheme } from 'react-data-table-component';
  
  

createTheme('solarized', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198',
  },
  background: {
    default: '#002b36',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#073642',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
});



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
	& .rdt_Table {
		background: transparent;
		& .rdt_TableHeadRow, & .rdt_TableRow {
			background: transparent;
		}
		& .rdt_TableHeadRow {
			& .rdt_TableCol {
				color: white;
				& > div > div {
					font-size: 16px;
					font-weight: 500;
				}
			}
		}
		& .rdt_TableBody {
			& .rdt_TableRow {
				min-height: unset;
				padding: 8px 0;
				border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				h2 {
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

const TransactionCard = () => {


	const { account, activate, deactivate } = useWeb3React()
	const [tableData,setTableData]=useState([]);
	// const [data, setData] =useState ([]);


      

   const Get_data = `
    {
        ethereum(network: bsc){
            dexTrades(options:{desc: ["block.height","tradeIndex"], limit: 10, offset: 0},
              date: {since: "2021-08-03" till: null }
              baseCurrency: {is: "0x016c285d5b918b92aa85ef1e147498badfe30d69"}
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
        const queryResult= await axios.post(
            'https://graphql.bitquery.io/',{
                query: Get_data
            }
        );
        setTableData(queryResult.data.data.ethereum.dexTrades)
    }
    useEffect(()=>{
        fetchData();
		  // eslint-disable-next-line react-hooks/exhaustive-deps 
    },[account])
    const table_data = tableData.map((elem : any) =>{
        const {block,baseAmount,quoteAmount,transaction}=elem
        return(
            <>
            
			{/* <h1>{block.timestamp.time}</h1>
			<h1>{transaction.hash}</h1> */}
			{/* <h1>{transaction.hash}</h1> */}
             {/* <tr>
            <td className="green">
             Just Now
             <h6 className="grey yoyo">{block.timestamp.time}</h6>
            </td>
           <td >{baseAmount} {elem.baseCurrency.symbol}<h6 >{quoteAmount} BNB</h6></td>
          <td>0.9538 USD<h6 >0.2356 BNB</h6></td>
        <td >$1.9538 USD <h6 className="grey yoyo">0.2356 BNB</h6></td>
        <td >{elem.exchange.fullNmae}</td>
        </tr> */}
            </>
        )
    })
    console.log("trades::::" , tableData)
  
       
    







  const [hideDirector, setHideDirector] = React.useState(false);
    
//   const [alldata, setalldata] = useState([]);
  const columns=[
    {
      name: 'Time',
      selector: 'time',
      sortable: true,
			cell: (row, index) => <Flex alignItems='center'>{ moment().diff(moment(row.time), 'minute') >= 1 ? <ArrowDown /> : <ArrowUp /> }<h2 className={moment().diff(moment(row.time), 'minute') >= 1 ? 'error' : 'success'}>{ moment().diff(moment(row.time), 'minute') >= 1 ? moment(row.time).utc().fromNow() : 'just now' }</h2></Flex>
    },
    {
      name: 'Traded',
      selector: 'traded',
      sortable: true,
			cell: (row, index) => <h2 className={moment().diff(moment(row.time), 'minute') >= 1 ? 'error' : 'success'}>{ row.traded }</h2>
    },
    {
      name: 'Token Price',
      selector: 'price',
      sortable: true,
			cell: (row, index) => <h2 className={moment().diff(moment(row.time), 'minute') >= 1 ? 'error' : 'success'}>{ row.price }</h2>
    },
		{
      name: 'Value',
      selector: 'value',
      sortable: true,
			cell: (row, index) => <h2 className={moment().diff(moment(row.time), 'minute') >= 1 ? 'error' : 'success'}>{ row.value }</h2>
    },
		{
			name: 'DEX',
			selector: 'dex',
			sortable: true,
			cell: (row, index) => <h2 className={moment().diff(moment(row.time), 'minute') >= 1 ? 'error' : 'success'}>{ row.dex }</h2>
		}
  ]

 



  

// useEffect(() => {
//     axios.fetch('https://jsonplaceholder.typicode.com/users')
// 	.then(res=>res.json()
// 	.then()

// 	})
// }, [])
  





  
  const fixedHeader = true

  return (
		<TableWrapper>
			<DataTable columns={columns} data={table_data} fixedHeader={fixedHeader} fixedHeaderScrollHeight="350px"/>
			{/* <table>
				<tr>
					<th>Time</th>
					<th>Traded</th>
					<th>Token Price</th>
					<th>Value</th>
					<th>DEX</th>
				</tr>
				<tbody>
					{table_data}
				</tbody>
			</table> */}
		</TableWrapper>
  )
}

export default TransactionCard
