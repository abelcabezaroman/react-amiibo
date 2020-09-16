import React, { useState } from 'react';
import './App.scss';
import { AmiibosPage } from "./pages/AmiibosPage/AmiibosPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Menu } from './shared/components/Menu/Menu';
import { AmiibosContext } from "./shared/contexts/AmiibosContext";
import { LanguageContext } from "./shared/contexts/LanguageContext";
import { FavoriteAmiiboContext } from "./shared/contexts/FavoriteAmiiboContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./shared/styles/GlobalStyles";
import { darkTheme, lightTheme } from "./shared/styles/themes";
import ToggleTheme from "./shared/components/ToogleTheme/ToogleTheme";
import { useDarkMode } from "./shared/hooks/useDarkMode";
import { GameSeriesPage } from "./pages/GameSeriesPage/GameSeriesPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { AmiiboDetailPage } from "./pages/AmiibosPage/pages/AmiiboDetailPage/AmiiboDetailPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ButtonStyles } from "./shared/styles/ButtonStyles";

function App () {
    const [amiibos, setAmiibos] = useState([]);
    const [favoriteAmiibo, setFavoriteAmiibo] = useState({
        "amiiboSeries": "Super Smash Bros.",
        "character": "Mario",
        "gameSeries": "Super Mario",
        "head": "00000000",
        "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
        "name": "Mario",
        "release": { "au": "2014-11-29", "eu": "2014-11-28", "jp": "2014-12-06", "na": "2014-11-21" },
        "tail": "00000002",
        "type": "Figure"
    });
    // const [language, setLanguage] = useState('es');

    /* Theme
       ****************************************************************************/
    // const [theme, themeToggler] = useDarkMode();
    const [theme, setTheme] = useState(darkTheme);

    return (
        <Router>
            <LanguageContext.Provider value={'es'}>
                <FavoriteAmiiboContext.Provider value={[favoriteAmiibo, setFavoriteAmiibo]}>
                    <AmiibosContext.Provider value={[amiibos, setAmiibos]}>

                        <ThemeProvider theme={theme}>
                            <GlobalStyles/>

                            <ToggleTheme theme={theme} setTheme={setTheme}/>
                            {/*<button onClick={themeToggler}}>Cambiar tema</button>*/}
                            <div className="container-fluid justify-content-center my-4 u-font-size-16">
                                <Menu/>

                                {/*<ThemeProvider theme={{*/}
                                {/*    text: 'red',*/}
                                {/*    backgroundOpacity: 'rgba(255,255,255,0.1)'*/}
                                {/*}}>*/}
                                {/*    <ButtonStyles>HOLA</ButtonStyles>*/}
                                {/*</ThemeProvider>*/}

                                {/*<ButtonStyles>azdsassd</ButtonStyles>*/}
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
                                    <Route path="/profile">
                                        <ProfilePage/>
                                    </Route>
                                    <Route path="/">
                                        <HomePage/>
                                    </Route>
                                </Switch>
                            </div>
                        </ThemeProvider>
                    </AmiibosContext.Provider>
                </FavoriteAmiiboContext.Provider>
            </LanguageContext.Provider>
        </Router>

    );
}

export default App;
