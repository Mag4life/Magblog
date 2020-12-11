import React, {useState, useContext} from 'react'
import axios from 'axios'

import {AppContext} from '../App.js'
import Loader from "../components/Loader";
import {NavLink} from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const app_context = useContext(AppContext)

    console.log(app_context.state)


    const login = () => {
        app_context.dispatch({type: "SET_LOADING", isLoading: true})
        const data = {email: username, password: password}
        axios.post("/api/auth/login", data)
            .then(response=> {
                app_context.dispatch({type: "SET_LOADING", isLoading: true})
                app_context.dispatch({type: "SET_AUTH", isAuthenticated: true})
            })
            .catch(error=> {
                console.log(error)
            })
    }

    return (
        <div className={"auth-wrapper flex-center"}>
            {app_context.state.isLoading ? <Loader /> :
            <form onSubmit={login} className={'flex-center shadow'}>
                <h3>Hey Welcome Back !!!</h3>
                <input type="email" required={true} value={username} onChange={e=> setUsername(e.target.value)} placeholder={"johndoe@email.com"}/>
                <input type="password" required={true} value={password} onChange={e=> setPassword(e.target.value)} placeholder={"Password"}/>
                <button type="submit">Login</button>
                <NavLink to="/signup">Already have an account</NavLink>
            </form> }
        </div>
    )
}


export default Login
