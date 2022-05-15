import { dialogApi } from "../../API";
import { DIALOGS__SET_ITEMS } from "./type";

export default {
    setDialogs: (items) => ({
        type: DIALOGS__SET_ITEMS,
        payload: items
    }),
    fetchDialogs: () => dispatch => {
        dialogApi.getAll().then(({data}) => {
            dispatch(this.setDialogs(data));
        })
    }
};;