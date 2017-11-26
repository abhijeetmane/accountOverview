import { combineReducers } from 'redux';
import transactionsReducer from './transactionsReducer';
import accountsReducer from './accountsReducer';
import { reducer as formReducer } from 'redux-form';

const Accountreducers = combineReducers({
	transactions: transactionsReducer,
	accounts: accountsReducer,
	form:formReducer
})

export default Accountreducers;