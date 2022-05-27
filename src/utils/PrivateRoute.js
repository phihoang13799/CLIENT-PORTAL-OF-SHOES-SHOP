import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from './Common';
 
// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> : <Navigate to={{ pathname: '/signin', state: { from: props.location } }} />}
    />
  )
}
 
export default PrivateRoute;