import React, { useState } from 'react';
import './App.scss';
import { Amiibos } from "./pages/Amiibos/Amiibos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GameSeries } from "./pages/GameSeries/GameSeries";
import { Menu } from './shared/components/Menu/Menu';
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { AmiibosContext } from "./shared/contexts/AmiibosContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { darkTheme, lightTheme } from "./shared/styles/themes";
import ToggleTheme from "./shared/components/ToogleTheme/ToogleTheme";
import { useDarkMode } from "./shared/hooks/useDarkMode";

function App () {
    const [amiibos, setAmiibos] = useState([]);
    const amiibosValue = { amiibos, setAmiibos };

    /* Theme
       ****************************************************************************/
    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <Router>
            <ThemeProvider theme={themeMode}>
                <GlobalStyles/>
                <ToggleTheme theme={theme} toggleTheme={themeToggler} />

                <div className="container-fluid justify-content-center my-4">
                    <Menu/>

                    <AmiibosContext.Provider value={amiibosValue}>

                        <Switch>
                            <Route path="/amiibos">
                                <Amiibos/>
                            </Route>
                            <Route path="/gameseries">
                                <GameSeries/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route>
                            <Route path="/">
                                <Home/>
                            </Route>
                        </Switch>
                    </AmiibosContext.Provider>
                </div>
            </ThemeProvider>
        </Router>
    );
}

export default App;
