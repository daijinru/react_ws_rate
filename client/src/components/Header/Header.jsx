import React from 'react';
import { Grid,Row,Col,PageHeader } from 'react-bootstrap';
import style from './Header.css';

class Header extends React.Component{
	// constructor方法相当于getInitialState()钩子函数，仅在组件初始化时且只执行一次
	constructor(props){
		super(props)
		this.state = {
			bankCP:this.props.data.bankCP,
			name:['USD','EUR','HKD','JPY','GBP'],
			defaultBankCP:this.props.data.defaultBankCP
		}
	}

	// 接收父辈组件传来的props对象，通过setState()方法更新state值
	componentWillReceiveProps(nextProps){
		if (nextProps !== undefined) {
			this.setState({
				defaultBankCP:nextProps.data.defaultBankCP
			})
		}
	}

	render(){

		return(
			<Grid className={style.martop}>
				<Row>
					<Col xs={12} md={12}>
						<h4 className={style.h4}>BankConversionPri</h4>
						<h2 className={style.head}>{ this.state.bankCP[this.state.defaultBankCP] }</h2>
						<h4 className={style.h4}> { this.state.name[this.state.defaultBankCP] } </h4>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Header;