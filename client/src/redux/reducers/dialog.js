import { DIALOGS__SET_ITEMS, SET_CURRENT__DIALOG } from "../actions/type";

const initialState = {
    items: [],
    currentDialog: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case DIALOGS__SET_ITEMS: 
            return {
                items: action.payload.data
            };
        case SET_CURRENT__DIALOG: {
           return {
                ...state,
                currentDialog: action.payload
            };
        }

        default: return state;
    };
};