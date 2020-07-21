import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



export const Component =(props) => {
    let queryName=''
    const {url} = props
    if(url){
            queryName=`?campaing=${url}`;
        }
    console.log('url',url)  
    

    return (
        <header>
            <nav className="green darken-4">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"> Главная </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li key={1}><Link to={`/create-campaing${queryName}`}> Создать кампанию </Link></li>
                        <li key={2}><Link to={`/campaing-config${queryName}`}> Настройки Кампании </Link></li>
                        <li key={3}><Link to={`/statistick${queryName}`}> Статистика </Link></li>
                        <li key={4}><Link to={`/help${queryName}`}> Помощь </Link></li>
                        <li key={5}><Link to={`/login${queryName}`}> Login </Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


const mapStateToprops =state=>({
    url:state.urlQueryParametrs  
})
export const Header =connect(mapStateToprops)(Component) 