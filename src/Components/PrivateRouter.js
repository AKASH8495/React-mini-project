import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({isLoginedIn, children}) => {
  if(isLoginedIn){
      return children
  }
  else{
     return <Navigate to='/Login'/>
  }
}

export default PrivateRouter