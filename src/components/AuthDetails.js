import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'


const AuthDetails=()=>{
    const[authuser, setAuthUser]=useState(null);

    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if (user){
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        });
        return()=>{
            listen();
        }
    },[])

  return (
    <div>{authuser ? <p>Signed In</p> : <p>Signed Out</p>}</div>
  )
}

export default AuthDetails