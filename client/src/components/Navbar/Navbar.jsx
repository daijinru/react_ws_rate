import React from 'react';
import { Navbar } from 'react-bootstrap';

class NavbarCP extends React.Component{
	render(){
		return(
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Exchange Rate</a>
					</Navbar.Brand>
				</Navbar.Header>
			</Navbar>
		)
	}
}

export default NavbarCP;