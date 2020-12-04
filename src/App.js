import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Menu from './core/components/Menu/Menu';
import Routes from './core/components/Routes/Routes';

function App() {
    return (
        <Router>
            <div className="container">
                <Menu></Menu>
                <Routes></Routes>
            </div>
        </Router>
    );
}

export default App;
