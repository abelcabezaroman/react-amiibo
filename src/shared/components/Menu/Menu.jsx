import React from 'react';
import './Menu.scss'
import { Link } from 'react-router-dom';
import styled from "styled-components";

export function Menu () {

    const LinkTo = styled.span`
      background-color: ${({ theme }) => theme.backgroundOpacity};
      }`;

    return (
        <div>
            <nav className="c-menu">
                <LinkTo className="c-menu__link"><Link to="/">Home</Link></LinkTo>
                <LinkTo className="c-menu__link"><Link to="/amiibos">Amiibos</Link></LinkTo>
                <LinkTo className="c-menu__link"><Link to="/gameseries">Game Series</Link></LinkTo>
                <LinkTo className="c-menu__link"><Link to="/profile">Profile</Link></LinkTo>
                <LinkTo className="c-menu__link"><Link to="/contact">Contact</Link></LinkTo>
            </nav>
        </div>

    );
}

