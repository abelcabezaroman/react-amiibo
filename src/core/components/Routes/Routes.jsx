import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AmiibosPage from '../../../pages/AmiibosPage/AmiibosPage';
import ContactPage from '../../../pages/ContactPage/ContactPage';
import GameSeriesPage from '../../../pages/GameSeriesPage/GameSeriesPage';
import HomePage from '../../../pages/HomePage/HomePage';

export default function Routes(){
    return(
        <Switch>
            <Route path="/amiibos">
                <AmiibosPage></AmiibosPage>
            </Route>
            <Route path="/gameseries">
                <GameSeriesPage></GameSeriesPage>
            </Route>
            <Route path="/contact">
                <ContactPage></ContactPage>
            </Route>
            <Route path="/">
                <HomePage></HomePage>
            </Route>
        </Switch>
    )
}