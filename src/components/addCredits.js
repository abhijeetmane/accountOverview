import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addTransactions } from '../actions';

class Credits extends Component {

	constructor(props){
		super(props);
		this.state={
			isCreditChecked:false,
			isDebitChecked:true
		};
	}

	renderField(field){
		const { meta: { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger':''}`;
		
		return (
			<div className={className}>
				<label>{field.label}</label>
				 <input
				 	className="form-control"
				 	type={field.type}
				 	{...field.input} />
				 
				 <div className="text-help">
				  {touched ? error:''}
				 </div>
			</div> 
		);
	}

	addCreditDebits(values){
		if(values){
			const postdata = {
	            "description": values.Description,
	            "amount": Number(values.Amount),
	            "date": values.Date ? values.Date : Date.now()
	        };
	       	if(this.state.isDebitChecked){postdata.to=values.To; delete postdata.From; delete values.From};
	       	if(this.state.isCreditChecked){postdata.from=values.From; delete postdata.To; delete values.To};
			this.props.addTransactions(postdata);
		}
	}

    changeRadioOptions() {
        this.setState((prevState) => {
            return {
                isCreditChecked: !prevState.isCreditChecked,
                isDebitChecked: prevState.isCreditChecked
            };
        });
    }

	render(){
		const { error, handleSubmit, pristine, reset, submitting } = this.props;
		return(
			<div className="credit-Box">
				<h5>Add your transcation details</h5>
				<div>	
					<form onSubmit={handleSubmit(this.addCreditDebits.bind(this))}>
					<div className="radioOptionsParent">
					<span className="radioOptions main-label">Debit
					<Field onClick={this.changeRadioOptions.bind(this)} name="Debit" label="Debit" component="input" type="radio"
					    checked={this.state.isDebitChecked} /></span>
					<span className="radioOptions">Credit
					<Field onClick={this.changeRadioOptions.bind(this)} name="Credit" label="Credit" component="input" type="radio"
					    checked={this.state.isCreditChecked} /></span>
					</div>
					<Field label={this.state.isDebitChecked? 'To*' : 'From*'} name={this.state.isDebitChecked? 'To' : 'From'} type="text" component={this.renderField} />
					<Field label="Description*" name="Description" type="text" component={this.renderField} />
					<Field label="Amount*" name="Amount" type="number" component={this.renderField} />
					<Field label="Date" name="Date" type="datetime-local" component={this.renderField} />
					<button	type="submit" className="btn btn-primary" disabled={pristine || submitting}>Save</button>
					<button	type="button" className="btn btn-primary reset-button" disabled={pristine || submitting} onClick={reset}>Reset</button>
				</form>
				</div>
			</div>
		);
	}
}


function validate(values) {
	const errors= {};
	if(!values.Description) errors.Description="Enter Description";
	if(!values.Amount) errors.Amount="Enter Amount";
	if(!values.From) errors.From="From is mandatory";
	if(!values.To) errors.To="To is mandatory";
	return errors;
}


export default reduxForm({
	validate,
	form:'AddCreditDebitForm'
})(connect(null,{ addTransactions })(Credits));




