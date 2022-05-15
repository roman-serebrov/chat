import {DIALOGS__SET_ITEMS, SET_CURRENT__DIALOG} from '../redux/actions/type';
import sendRequest from './request';
export {default as dialogApi} from './dialog';

let headers = {
   "Access-Control-Allow-Origin": "*"
}

const actions = {
    setDialogs: items => ({
        type: DIALOGS__SET_ITEMS,
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        sendRequest('im').then(response => response.json()).then((data) => dispatch(actions.setDialogs(data)))   
    }
}

export default actions;