import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, isUserLoggedIn, ...rest }) => {
  console.log(`ProtectedRoute: ${isUserLoggedIn}`)
  return (
    <div>
      <Route {...rest} render={({ location }) => {
        return isUserLoggedIn ? children : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
      }}>
        {}
      </Route>
    </div>
  )
}
