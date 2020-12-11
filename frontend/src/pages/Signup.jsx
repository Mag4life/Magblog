import React, {useState} from 'react'
import Loader from "../components/Loader";
import {NavLink} from "react-router-dom";


const Signup = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className={"auth-wrapper flex-center"}>
                <form className={'flex-center shadow'}>
                    <h3>Hey Welcome Back !!!</h3>
                    <input type="text" required={true} value={firstName} onChange={e => setFirstName(e.target.value)}
                           placeholder={"First name"}/>
                    <input type="text" required={true} value={lastName} onChange={e => setLastName(e.target.value)}
                           placeholder={"Last name"}/>
                    <input type="email" required={true} value={email} onChange={e => setEmail(e.target.value)}
                           placeholder={"Email"}/>
                    <input type="password" required={true} value={password} onChange={e => setPassword(e.target.value)}
                           placeholder={"Password"}/>
                    <button type="submit">Signup</button>
                    <NavLink to="/login">Already have an account</NavLink>
                </form>
        </div>
    )
}


export default Signup