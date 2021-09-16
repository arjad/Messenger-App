import React from 'react'
import { auth } from '../firbase.js'
import "./signout.css"
import M from "./img/m.png";
function SignOut() {
    return (
        <nav className="container-fluid py-2">
            <img src={M} className=" logo mx-3 mt-1"/>
            <h1>Messenger App</h1>
            <button className="signout_btn btn" 
                // signout function
                onClick={() => auth.signOut()}>
                Sign Out
            </button>
        </nav>
    )
}

export default SignOut