import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Loading from './core/components/Loading/Loading';
import Menu from './core/components/Menu/Menu';
import Routes from './core/components/Routes/Routes';
import LoadingContext from './shared/contexts/LoadingContext';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    return (
        <Router>
            <LoadingContext.Provider value={{isLoading, setIsLoading}}>
                <div className="container">
                    <Loading></Loading>
                    <Menu></Menu>
                    <Routes></Routes>
                </div>
            </LoadingContext.Provider>
        </Router>
    );
}

export default App;
