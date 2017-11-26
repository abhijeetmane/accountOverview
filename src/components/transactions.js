import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransactionsDetails } from '../actions';

class Transactions extends Component {

	componentWillMount(){
		this.props.fetchTransactionsDetails();
	}

	renderList(){
		if(!this.props.transactions || this.props.transactions.length<=0){
			return (
				<div className="account-header refresh-msg">
					<h5>Problem in connecting to server. Please click on refresh icon</h5>
					<span className="glyphicon glyphicon-refresh refresh-icon" onClick={() => this.props.fetchTransactionsDetails()}></span>
				</div>
			);
		}
		else{
			const transList = this.props.transactions.sort(function(a,b){
			       return new Date(b.date) - new Date(a.date);	   
		    });

		    return transList.map((trans) => {
		    	const key = trans.from ? 'From': 'To';
					return (
						<div key={key+Math.random()} className="trans-list">
							<span className="col-xs-4 col-sm-3 main-label">{key}: </span>
							<span className="col-xs-8 col-sm-9">{trans.from ? trans.from : trans.to}</span>

							<span className="col-xs-4 col-sm-3 main-label">Description:</span>
							<span className="col-xs-8 col-sm-9">{trans.description}</span>

							<span className="col-xs-4 col-sm-3 main-label">Amount:</span>
							<span className="col-xs-8 col-sm-9">{trans.amount}</span>

							<span className="col-xs-4 col-sm-3 main-label">Date:</span>
							<span className="col-xs-8 col-sm-9">{new Date(trans.date).toLocaleString()}</span>

						</div>
					);
			});

		}
	}

	render(){
		return (
			<div>
				<div className="trans-box-header">
					<span className="trans-box-title">Transactions overview</span>
					<span>(sorted by transaction date)</span>
				</div>
				<div className="trans-box">
					{this.renderList()}
				</div>
			</div>
		);
	}

}

function mapStateToProps(state){
	return {
		transactions : state.transactions
	}
}

export default connect(mapStateToProps,{fetchTransactionsDetails})(Transactions);

