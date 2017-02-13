import React from 'react';
import ReactDOM from 'react-dom';
import Publisher from './components/Publisher/Publisher.jsx';

class Group extends React.Component{
	constructor(...args){
		super(...args);
		this.state = {
			data:{
				name:'jeocat'
			}
		}
	}
	render(){
		return(
			<div>
				<Publisher data={this.state.data}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Group />,document.getElementById('container')
)