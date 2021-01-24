import React from 'react'
import { Button } from '@material-ui/core';
import '../styles/Login.css';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider'
import { actionTypes } from "../reducer"

function Login() {
  // const [{ user }, dispatch] = useStateValue();
  const [{}, dispatch] = useStateValue();

  const sighIn = () => {
    auth
    .signInWithPopup(provider)
    .then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      })
    })
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
