import React from 'react'
import Tamplet from '../Components/Tamplet'
import loginImage from '../assets/login.png'

const Login = ({setLoginedIn}) => {
  return (
    <Tamplet
    title='Welcome Back'
    decs1='Build skills for today, tomorrow and beyond.'
    decs2='Education to future-proof your carrer. '
    image={loginImage}
    formtype='login'
    setLoginedIn={setLoginedIn}
    
    
    
    />
  )
}

export default Login