import { GET_TRANSACTIONS_DETAILS } from '../actions';
import { ADD_CREDIT_DEBIT } from '../actions';

export default function(state= [],action){

	switch(action.type){
		case GET_TRANSACTIONS_DETAILS:{
			return [...action.payload];
		}
		case ADD_CREDIT_DEBIT: {
			return [...state,action.payload]
		}
		default:
			return state;
	}
}