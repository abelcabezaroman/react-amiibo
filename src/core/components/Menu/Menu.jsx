import React from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';

export default function Menu() {

    return (
        <div>
            <nav className="c-menu">
                <NavLink exact className="c-menu__link" activeClassName="c-menu__link--active" to="/">Home</NavLink>
                <NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/amiibos">Amiibos</NavLink>
            </nav>
        </div>

    );
}

