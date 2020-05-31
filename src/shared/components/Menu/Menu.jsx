import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';

export function Menu (props) {
    return (
        <nav className="c-menu">
            <Link className="c-menu__link" to="/amiibos">Amiibo</Link>
            <Link className="c-menu__link" to="/gameseries">Game Series</Link>
        </nav>
    );
}

