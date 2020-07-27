import {CHANGE_URL_QUERY} from '../actions/links.actions'



export const urlQueryParametrs = (state:string='',action:{type:string,text:string})=>{
    switch (action.type) {
        case CHANGE_URL_QUERY:
            return action.text;
            break;
        default:
            return state;
    }
}

export const isLogin = (state:boolean=false,action:{type:string,text:string})=>{
    switch (action.type) {
        case "LOGIN":
            return action.text;
            break;
        default:
            return state;
    }
}

