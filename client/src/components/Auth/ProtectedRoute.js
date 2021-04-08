import React from 'react'
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children, ...rest }) => {
  const isAuthenticated = true;
  return (
    <div>
      <Route {...rest} render={({ location }) => {
        return isAuthenticated === true ? children : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
      }}>
        {}
      </Route>
    </div>
  )
}
