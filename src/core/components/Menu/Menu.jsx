import React from 'react';
import './Menu.scss'
import { NavLink } from 'react-router-dom';
import  styled  from "styled-components"

export default function Menu() {

    const LinkToStyles = styled.span`
    background-color: ${({ theme }) => theme.backgroundOpacity};
    display: inherit;
    margin: 24px;
    }`;

    return (
        <div>
            <nav className="c-menu">
                <LinkToStyles><NavLink exact className="c-menu__link" activeClassName="c-menu__link--active" to="/">Home</NavLink></LinkToStyles>
                <LinkToStyles><NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/amiibos">Amiibos</NavLink></LinkToStyles>
                <LinkToStyles><NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/gameseries">Game Series</NavLink></LinkToStyles>
                <LinkToStyles><NavLink className="c-menu__link" activeClassName="c-menu__link--active" to="/contact">Contact</NavLink></LinkToStyles>
            </nav>
        </div>

    );
}