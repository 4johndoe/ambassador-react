import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    return (
        <BrowserRouter>
            <Route path={'/'} exact component={ProductsFrontend}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/register'} component={Register}/>
            <Route path={'/profile'} component={Profile}/>
        </BrowserRouter>
    );
}

export default App;
