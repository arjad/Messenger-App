import React, { useState } from 'react'
import { db, auth } from '../firbase'
import firebase from 'firebase'
import {Button } from '@material-ui/core'
import "./sendmessege.css";

function SendMessages({ scroll }) {
    //our messge in input stored here
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        //info from google on signin but we need only photo url and user id
        const { uid, photoURL } = auth.currentUser

        //await until we get above info
        await db.collection('messenger-data').add({
            text: msg,
            photoURL,
            uid,
            //time stamp to check which msg was sent first and then order it correctly
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        // after sending inout box will be empty
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg px-5">
                    <div class="input-group mb-3">
                      <input type="text" 
                            class="form-control" 
                            value={msg} 
                            onChange={e => setMsg(e.target.value)} 
                            placeholder="Type messege to send ..." 
                            aria-label="Recipient's username" 
                            aria-describedby="basic-addon2"/>
                        

                      <div class="input-group-append">
                        <button class="input-group-text" type="submit" id="basic-addon2">
                            Send
                        </button>
                      </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMessages