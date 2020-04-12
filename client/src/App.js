import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/main.scss';

// Redux
import store from './redux/store.redux'
import { loadUser } from './redux/actions/auth.actions'
import setAuthToken from './redux/utils/setAuthToken'

// Components
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/user-dashboard/Dashboard'
import Alert from './components/layout/Alert';
import Freelancers from './components/freelancers/Freelancers'
import ForgotPassword from './components/auth/ForgotPassword'

// Private route
import PrivateRoute from './components/auth/PrivateRoute'


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
    <section className="container">
      <Alert />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/forgotpassword' component={ForgotPassword} />
        <Route exact path='/freelancers' component={Freelancers} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
    </section>
      </Switch>
    </>
  );
}

export default App;
