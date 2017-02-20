import React from 'react';
import { Grid,Row,Col,PageHeader } from 'react-bootstrap';
import style from './Header.css';

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			bankCP:this.props.data
		}
	}

	componentWillUpdate(nextProps,nextState){}

	render(){

		return(
			<Grid>
				<Row>
					<Col xs={12} md={12}>
						<h2 className={style.head}>{this.state.bankCP}</h2>
					</Col>
				</Row>
			</Grid>
		)
	}
}

export default Header;