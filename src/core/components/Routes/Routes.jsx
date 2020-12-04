import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AmiibosPage from '../../../pages/AmiibosPage/AmiibosPage';
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
            <Route path="/">
                <HomePage></HomePage>
            </Route>
        </Switch>
    )
}