import { useState } from 'react'
import { Redirect, useLocation } from "react-router-dom";


export const Login = () => {
  const [ redirectToReferrer, setRedirectToReferrer ] = useState(false)
  const { state } = useLocation()

  if (redirectToReferrer) {
    return <Redirect to={state?.from || '/'}/>
  }
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}
