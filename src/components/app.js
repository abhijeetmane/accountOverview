import React, { Component } from 'react';
import Balance from './balance';
import Credits from './addCredits';
import Transactions from './transactions';

export default class App extends Component {
	render(){
		return(
			<div className="app-template">
				<Balance />
				<Credits />
				<Transactions />
			</div>
		);
	}
}