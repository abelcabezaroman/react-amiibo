import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Loading from './core/components/Loading/Loading';
import Menu from './core/components/Menu/Menu';
import Routes from './core/components/Routes/Routes';
import LoadingContext from './shared/contexts/LoadingContext';
import { ThemeProvider } from "styled-components";
import { ButtonStyles } from './shared/styles/ButtonStyles';
import { lightTheme } from './shared/styles/themes';
import ToggleTheme from './shared/components/ToogleTheme/ToogleTheme';
import { GlobalStyles } from './shared/styles/GlobalStyles';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [theme, setTheme] = useState(lightTheme);
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <ToggleTheme theme={theme} setTheme={setTheme} />

                <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
                    <div className="container">
                        <Loading></Loading>
                        <Menu></Menu>
                        <Routes></Routes>
                    </div>
                </LoadingContext.Provider>
            </ThemeProvider>
        </Router>
    );
}

export default App;
