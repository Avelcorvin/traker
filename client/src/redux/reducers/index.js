import {combineReducers} from 'redux'
import { urlQueryParametrs,isLogin } from './links.reducer'





export const mainReducer =combineReducers({
    urlQueryParametrs,
    isLogin
})


