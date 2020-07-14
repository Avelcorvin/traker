import React from 'react'
export const Header = ()=>{
    return(
        <header>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Главная</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Кампании</a></li>
                    <li><a href="sass.html">Статистика</a></li>
                    <li><a href="badges.html">Настройки Кампании</a></li>
                    <li><a href="collapsible.html"> Помощь</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )}