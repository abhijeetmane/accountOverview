import axios from 'axios';

export const GET_ACCOUNT_INFO = 'get_account_info';
export const GET_TRANSACTIONS_DETAILS = 'get_transactions_details';
export const ADD_CREDIT_DEBIT = 'add_credit_debit';

const URL = 'http://localhost:8080/api/balance';
const ADD_URL = 'http://localhost:8080/api/balance/add';

export function fetchAccountDetails() {   
    const request = axios.get(URL);

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: GET_ACCOUNT_INFO, payload: data.account });
        });
    }

}

export function fetchTransactionsDetails() {
    const request = axios.get(URL);

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: GET_TRANSACTIONS_DETAILS, payload: data.debitsAndCredits });
        });
    }

}

export function addTransactions(postdata) {
    const request = axios.put(ADD_URL, JSON.stringify(postdata));

    return (dispatch) => {
        request.then(({ data }) => {
            dispatch({ type: ADD_CREDIT_DEBIT, payload: postdata });
        });
    }

}