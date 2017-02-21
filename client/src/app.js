import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import Currency from './components/Currency/Currency.jsx';

class Group extends React.Component{
	constructor(...args){
		super(...args);
		this.state = {
			data:{
				rate:{
					"data1":{
						"bankConversionPri":"686.2900",
						"date":"2017-02-16",
						"fBuyPri":"684.8600",
						"fSellPri":"687.6000",
						"mBuyPri":"679.2300",
						"mSellPri":"687.6000",
						"name":"美元",
						"time":"15:30:01"
					},
					"data2":{
						"bankConversionPri":"727.8400",
						"date":"2017-02-16",
						"fBuyPri":"725.2500",
						"fSellPri":"730.3400",
						"mBuyPri":"702.6600",
						"mSellPri":"730.3400",
						"name":"欧元",
						"time":"15:30:01"
					},
					"data3":{
						"bankConversionPri":"88.4300",
						"date":"2017-02-16",
						"fBuyPri":"88.2200",
						"fSellPri":"88.5600",
						"mBuyPri":"87.5100",
						"mSellPri":"88.5600",
						"name":"港币",
						"time":"15:30:01"
					},
					"data4":{
						"bankConversionPri":"6.0105",
						"date":"2017-02-16",
						"fBuyPri":"6.0000",
						"fSellPri":"6.0422",
						"mBuyPri":"5.8132",
						"mSellPri":"6.0422",
						"name":"日元",
						"time":"15:30:01"
					},
					"data5":{
						"bankConversionPri":"855.5600",
						"date":"2017-02-16",
						"fBuyPri":"853.0100",
						"fSellPri":"859.0000",
						"mBuyPri":"826.4500",
						"mSellPri":"859.0000",
						"name":"英镑",
						"time":"15:30:01"
					}
				},
				bankCP:[]
			},
			defaultBankCP:0
		}
	}

	componentWillMount(){
		let { rate,bankCP } = this.state.data;

		for (let i in rate){
			bankCP.push(rate[i].bankConversionPri);
		}
	}

	handleChangeHeader(event){
		let index = event.currentTarget.dataset.index;
		let defaultBankCP = this.state.defaultBankCP;

		this.setState({defaultBankCP:index})
	} 


	render(){
		let { rate,bankCP } = this.state.data;
		let defaultBankCP = this.state.defaultBankCP;
		let bankCPdata = {
			'bankCP':bankCP,
			'defaultBankCP':defaultBankCP
		}
		return(
			<div>
				<Navbar />
				<Header data={ bankCPdata } />
				<Currency data={ rate } onHeaderSubmit={this.handleChangeHeader.bind(this)} />
			</div>
		)
	}
}

ReactDOM.render(
	<Group />,document.getElementById('container')
)