import React, {useReducer} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import reducer, {appState} from "./reducers/main";

import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Posts from './pages/Posts'

// Styles here
import './assets/styles/auth.css'       // Styles For Authentication


export const AppContext = React.createContext()


function App() {

    const [state, dispatch] = useReducer(appState, reducer)
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <AppContext.Provider value={{state: state, dispatch: dispatch}}>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/signup"} component={Signup}/>
                    <Route path={"/posts"} component={Posts}/>
                    <Route exact={true} path={"/"} component={Home}/>
                    </AppContext.Provider>
                </Switch>
            </div>
        </BrowserRouter>
    );
}


export default App;
