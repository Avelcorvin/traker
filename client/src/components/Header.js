import React from 'react'
import { Link } from 'react-router-dom'
export const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo"> Главная </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/create-campaing"> Создать кампанию </Link></li>
                        <li><Link to="/campaing-config"> Настройки Кампании </Link></li>
                        <li><Link to="/statistick"> Статистика </Link></li>
                        <li><Link to="/help"> Помощь </Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}