import React from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import style from './Currency.css';

class Currency extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			rate:this.props.data,
			dataArr:[]
		}
	}

	componentWillMount(){
		let data = this.state.rate;
		let arr = [];

		for (let i in data){
			arr.push(data[i]);
		}

		this.state.dataArr = arr;
	}

	clickHandle(event){
		this.props.onHeaderSubmit(event);
	}

	render(){
		let eleData = this.state.dataArr.map((item,index) => {
			return <Row className={style.marbot} data-index={index} onClick={this.clickHandle.bind(this)}>
				<Col xs={4} md={4}>
					<p>{item.name}</p>
					<p>{item.date}</p>
					<p>{item.time}</p>
				</Col>
				<Col xs={4} md={4}>
					<p>现汇</p>
					<p className={style.red}>{item.fBuyPri}</p>
					<p className={style.green}>{item.fSellPri}</p>
				</Col>
				<Col xs={4} md={4}>
					<p>现钞</p>
					<p className={style.red}>{item.mBuyPri}</p>
					<p className={style.green}>{item.mSellPri}</p>
				</Col>
			</Row>
		})

		return(
			<Grid className={style.martop}>
				{eleData}
				<Row className={style.tips}>
					<Col xs={12}>
						<p><span className={style.red}>红色</span>：买入，<span className={style.green}>绿色</span>：卖出</p>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Currency;