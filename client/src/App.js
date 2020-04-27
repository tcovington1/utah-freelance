import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import  { Breakpoint, BreakpointProvider } from 'react-socks';

import './styles/main.scss';

// Redux
import store from './redux/store.redux'
import { loadUser } from './redux/actions/auth.actions'
// import { getCurrentProfile } from './redux/actions/freelancers.actions'
import setAuthToken from './redux/utils/setAuthToken'

// Components
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/user-dashboard/Dashboard'
import Alert from './components/layout/Alert';
import Freelancers from './components/freelancers/FreelancerList'
import ForgotPassword from './components/auth/ForgotPassword'
import Services from './components/freelancers/services/Services'

// Private route
import PrivateRoute from './components/auth/PrivateRoute'
import CreateFreelancer from './components/freelancers/freelancer-form/CreateFreelancer.form';
import Freelancer from './components/freelancers/freelancer/Freelancer';
import EditFreelancerForm from './components/freelancers/freelancer-form/EditFreelancer.form';
import AddPhoto from './components/freelancers/freelancer-form/AddPhoto.form';
import AddService from './components/freelancers/services/service-form/AddService.form';


if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
    <BreakpointProvider>
      {/* <Navbar /> */}
        <Switch>
          <Route exact path='/' component={Landing} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/createfreelancer' component={CreateFreelancer} />
          <PrivateRoute exact path='/editfreelancer/:id' component={EditFreelancerForm} />
          <PrivateRoute exact path='/freelancers/:id/addphoto' component={AddPhoto} />
          <PrivateRoute exact path='/freelancers/:id/addservice' component={AddService} />
          {/* <PrivateRoute exact path='/freelancers/:id/services' component={FreelancerServices} /> */}
      <section className="container">
        <Alert />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/forgotpassword' component={ForgotPassword} />
          <Route exact path='/freelancers' component={Freelancers} />
          <Route exact path='/freelancers/:id' component={Freelancer} />
          <Route exact path='/services' component={Services} />
      </section>
        </Switch>
    </BreakpointProvider>
    </>
  );
}

export default App;
