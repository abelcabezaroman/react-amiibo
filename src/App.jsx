import React from 'react';
import './App.scss';
import { Amiibos } from "./pages/Amiibos/Amiibos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GameSeries } from "./pages/GameSeries/GameSeries";

function App () {
    return (
        <Router>
            <div className="container-fluid">
                {/*<nav>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <Link to="/">Home</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/about">About</Link>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <Link to="/users">Users</Link>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</nav>*/}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/amiibos">
                        <Amiibos/>
                    </Route>
                    <Route path="/gameseries">
                        <GameSeries/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
