import React from 'react'
import { Content } from './Content'
import { LeftMenu } from '../wrappers/leftmenu.wrapper'
import { connect } from 'react-redux'
import { Login } from '../pages/Login.page'


export const Component = (props) => {
    const {isLogin}=props;
    console.log("props:",props)
    let content= <Login/>

    if(isLogin)
        content =<><LeftMenu /><Content /></>
    return (
        <main className="main">
            <div className="main-wrapper">
                {content}
            </div>
        </main>
    )
} 

const mapStateToProps= (state)=>({
            isLogin:state.isLogin

})
export const Main = connect(mapStateToProps)(Component)