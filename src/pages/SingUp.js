import React from 'react'
import singupImage from '../assets/signup.png'
import Tamplet from '../Components/Tamplet'

const SingUp = ({setLoginedIn}) => {
  return (
    <Tamplet
    title='Join the million learning to code with StudyNotion for free'
    decs1='Build skills for today, tomorrow and beyond.'
    decs2='Education to future-proof your carrer. '
    image={singupImage}
    formtype='singUp'
    setLoginedIn={setLoginedIn}
  
    />
  )
}

export default SingUp