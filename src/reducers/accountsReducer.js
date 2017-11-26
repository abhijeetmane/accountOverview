import { GET_ACCOUNT_INFO } from '../actions';

export default function(state= {},action){

	switch(action.type){
		case GET_ACCOUNT_INFO:{
			return {...action.payload}
		}
		default:
			return state;
	}
}