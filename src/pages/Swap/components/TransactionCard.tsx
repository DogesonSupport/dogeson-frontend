import React,{useEffect} from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap-libs/uikit'
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

const TransactionCard = () => {
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
						<td>Traded</td>
						<td>Token Price</td>
						<td>Value</td>
						<td>DEX</td>
					</tr>
				</thead>
				<tbody>
					{
						data.map((val, ind) => (
							<tr>
								<td>
									<Flex alignItems='center'>{ moment().diff(moment(val.time), 'minute') >= 1 ? <ArrowDown /> : <ArrowUp /> }<h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ moment().diff(moment(val.time), 'minute') >= 1 ? moment(val.time).utc().fromNow() : 'just now' }</h2></Flex>
								</td>
								<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.traded }</h2></td>
								<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.price }</h2></td>
								<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.value }</h2></td>
								<td><h2 className={moment().diff(moment(val.time), 'minute') >= 1 ? 'error' : 'success'}>{ val.dex }</h2></td>
							</tr>
						))
					}
				</tbody>
			</table>
		</TableWrapper>
  )
}

export default TransactionCard
