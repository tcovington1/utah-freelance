import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles/main.scss';


import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <>
    <Navbar />
    <section className="container">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </section>
    </>
  );
}

export default App;
