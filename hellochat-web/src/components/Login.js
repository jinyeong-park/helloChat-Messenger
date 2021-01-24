import React from 'react'
import { Button } from '@material-ui/core';
import '../styles/Login.css';
import { auth, provider } from '../firebase'

function Login() {
  const sighIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => console.log('auth result:', result))
    .catch((error) => alert(error.message));

  }

  return (
    <div className="login">
      <div className="login__container">
      <img src="https://i.imgur.com/69xYioI.png" alt=""/>
        <div className="login__text">
          <h1>Sign in to HelloTalk</h1>
        </div>

        <Button onClick={sighIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  )
}

export default Login
