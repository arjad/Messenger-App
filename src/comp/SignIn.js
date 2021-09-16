import React from 'react'
import firebase from 'firebase'
import { auth } from '../firbase.js'
import "./signin.css";
import { Button } from '@material-ui/core';
import Logo from "./img/g.png";
import M from "./img/m.png";

function SignIn() {
    function signInWithGoogle() {
        // google auth provider is enabled from firebase
        const google_provider = new firebase.auth.GoogleAuthProvider()
        // signin function
        auth.signInWithPopup(google_provider)
    }
    return (
        <div>
            <nav className="container-fluid py-2">
                <img src={M} className=" logo mx-3 mt-1"/>
                <h1>Messenger App</h1>
            </nav>
            <div className="signin_body container bg-light">
                <h1 className="mt-5"> We Chat</h1>
                <p className="mb-5  mt-4 text-center">
                    We provide you a way to connect to your friends and family<br/> 
                    for free. You can join us by signing in with your google account and <br/>
                    have chat with your loved once
                </p>
                <button className="btn" onClick={signInWithGoogle}>
                    <h3>
                        <img className="google_logo" src={Logo}/>
                        Sign In With Google
                    </h3>
                </button>

            </div>
        </div>
    )
}

export default SignIn