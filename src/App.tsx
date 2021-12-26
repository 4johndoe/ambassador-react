import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Rankings from "./pages/Rankings";

function App() {
    return (
        <BrowserRouter>
            <Route path={'/'} exact component={ProductsFrontend}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/stats'} component={Stats}/>
            <Route path={'/rankings'} component={Rankings}/>
        </BrowserRouter>
    );
}

export default App;
