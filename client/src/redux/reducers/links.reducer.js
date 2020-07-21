import {CHANGE_URL_QUERY} from '../actions/links.actions'



export const urlQueryParametrs = (state='',acion)=>{
    switch (acion.type) {
        case CHANGE_URL_QUERY:
            return acion.text;
            break;
        default:
            return state;
    }
}

export const isLogin = (state=false,action)=>{
    switch (action.type) {
        case "LOGIN":
            return action.text;
            break;
        default:
            return state;
    }
}

