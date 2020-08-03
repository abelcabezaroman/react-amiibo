import React, { useState } from 'react';
import './App.scss';
import { Amiibos } from "./pages/Amiibos/Amiibos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GameSeries } from "./pages/GameSeries/GameSeries";
import { Menu } from './shared/components/Menu/Menu';
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { AmiibosContext } from "./shared/contexts/AmiibosContext";
import { LanguageContext } from "./shared/contexts/LanguageContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { darkTheme, lightTheme } from "./shared/styles/themes";
import ToggleTheme from "./shared/components/ToogleTheme/ToogleTheme";
import { useDarkMode } from "./shared/hooks/useDarkMode";
import { AmiiboDetail } from "./pages/Amiibos/AmiiboDetail/AmiiboDetail";

function App () {
    const [amiibos, setAmiibos] = useState([]);
    // const [language, setLanguage] = useState('es');

    /* Theme
       ****************************************************************************/
    const [theme, themeToggler] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;


    return (
        <Router>
            <LanguageContext.Provider value={'es'}>
                <ThemeProvider theme={themeMode}>
                    <GlobalStyles/>
                    <ToggleTheme theme={theme} toggleTheme={themeToggler}/>
                    {/*<button onClick={themeToggler}}>Cambiar tema</button>*/}
                    <div className="container-fluid justify-content-center my-4 u-font-size-16">
                        <Menu/>

                        {/*<ButtonStyles>azdsassd</ButtonStyles>*/}
                        <AmiibosContext.Provider value={[amiibos, setAmiibos]}>
                            <Switch>
                                <Route path="/amiibos/:tail">
                                    <AmiiboDetail/>
                                </Route>
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
            </LanguageContext.Provider>
        </Router>

    );
}

export default App;
