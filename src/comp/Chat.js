import React, { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firbase'
import SendMessages from './SendMessages'
import SignOut from './SignOut'
import "./chat.css"
function Chat() 
{    
    const scroll = useRef()
    //scroll.current.scrollIntoView({ behavior: 'smooth' })

    //to store messge in hooks usestate
    const [messages, setMessages] = useState([])
    useEffect(() => {
        // accessing collection in firebase
        db.collection('messenger-data').orderBy('createdAt').limit(10000).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
    return (
        <div>
            <SignOut />
            <div className="msgs chat_div container-fluid px-5">
                {messages.map(({ id, text, photoURL, uid, }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img className="user_pic" src={photoURL} alt="user" />
                            <p className="text">{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat