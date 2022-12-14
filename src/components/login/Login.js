import React from 'react'
import './Login.css'
import logo from '../../images/Gmail_logo.png'
import { Button } from '@mui/material'
import { auth, provider } from '../../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'

function Login() {

  const dispatch = useDispatch();

  const SignIn = () => {
    auth.signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,

        }))
      }).catch(error => alert(error.message));
  }

  return (
    <div className='login'>
      <div className="login_container">
        <img
          src={logo}
          alt=""
        />
        <Button
          onClick={SignIn}
          variant="contained"
          color='primary'
        >
          Login
        </Button>
      </div>
    </div>
  )
}

export default Login