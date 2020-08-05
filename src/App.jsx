import React, { useState } from 'react';
import './App.scss';
import { AmiibosPage } from "./pages/AmiibosPage/AmiibosPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from './shared/components/Menu/Menu';
import { AmiibosContext } from "./shared/contexts/AmiibosContext";
import { LanguageContext } from "./shared/contexts/LanguageContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/styles/globalStyles";
import { darkTheme, lightTheme } from "./shared/styles/themes";
import ToggleTheme from "./shared/components/ToogleTheme/ToogleTheme";
import { useDarkMode } from "./shared/hooks/useDarkMode";
import { GameSeriesPage } from "./pages/GameSeriesPage/GameSeriesPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { AmiiboDetailPage } from "./pages/AmiibosPage/pages/AmiiboDetailPage/AmiiboDetailPage";

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
                                    <AmiiboDetailPage/>
                                </Route>
                                <Route path="/amiibos">
                                    <AmiibosPage/>
                                </Route>
                                <Route path="/gameseries">
                                    <GameSeriesPage/>
                                </Route>
                                <Route path="/contact">
                                    <ContactPage/>
                                </Route>
                                <Route path="/">
                                    <HomePage/>
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
