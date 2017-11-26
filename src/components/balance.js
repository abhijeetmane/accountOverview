import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountDetails } from '../actions';

class Balance extends Component {

	componentWillMount(){
		this.props.fetchAccountDetails();
	}

    getUpdatedBalance() {
        let formOptions = this.props.form;
        let newBalance = this.props.accounts.balance ;
        if (formOptions.AddCreditDebitForm && formOptions.AddCreditDebitForm.values) {
            let newTransVal = formOptions.AddCreditDebitForm.values;
           
            if (newTransVal.To && Number(newTransVal.Amount)>0) {
                newBalance = this.props.accounts.balance  -  Number(newTransVal.Amount);
            }
            if (newTransVal.From && Number(newTransVal.Amount)>0) {
                newBalance = this.props.accounts.balance  + Number(newTransVal.Amount);
            }
            if(formOptions.AddCreditDebitForm.submitSucceeded){
            	this.props.accounts.balance = newBalance;
            	formOptions.AddCreditDebitForm.submitSucceeded=!formOptions.AddCreditDebitForm.submitSucceeded;
            }
        }
          return this.props.accounts.balance;
    }

	render(){
		if(!this.props.accounts.name){
			return (
				<div className="account-header">
					<h4>Accounts & Transactions</h4> 
					<h5>Problem in connecting to server. Please click on refresh icon</h5>
					<span className="glyphicon glyphicon-refresh refresh-icon" onClick={() => this.props.fetchAccountDetails()}></span>
				</div>
			);
		}

		return(
			<div className="account-header">
				<h4>Accounts & Transactions</h4>
				<span className="welcome-msg">Hello <span className="welcome-msg-name">{this.props.accounts.name}</span>, welcome To Bank</span>
				<div className="account-details">
					<span className="col-xs-4 col-sm-3 main-label">Name:</span>
					<span className="col-xs-8 col-sm-9">{this.props.accounts.name}</span>
					<span className="col-xs-4 col-sm-3 main-label">iban No:</span>
					<span className="col-xs-8 col-sm-9">{this.props.accounts.iban}</span>
					<span className="col-xs-4 col-sm-3 main-label">Balance:</span>
					<span className="col-xs-8 col-sm-9">{this.getUpdatedBalance()}</span>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		accounts : state.accounts,
		form:state.form
	}
}

export default connect(mapStateToProps,{fetchAccountDetails})(Balance);

