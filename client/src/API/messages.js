// запрос окна соббщений
import { SET_CURRENT__DIALOG } from '../redux/actions/type';

import sendRequest from './request';

const action = {
    setCurrentDialog: (id) => ({
        type: SET_CURRENT__DIALOG,
        payload: id
    }),
    fetchMessages: (dialogId) => dispatch => {
        sendRequest(`message/${dialogId}`).then(response => response.json()).then(data => dispatch(action.setCurrentDialog(data)))
    }
};

export default action;