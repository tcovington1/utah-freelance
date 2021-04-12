import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Dashboard } from "./components/App/Dashboard";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { FreelancersList } from "./components/FreelancersList";
import { Home } from "./components/Home";
import { Auth } from "./components/Auth/Auth";
import { Nav } from "./components/Nav";

import axios from 'axios';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [user, setUser] = useState()

  // const getUser = (token) => {
  //   axios.get('/me', {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err))
  // }

  const handleLogin = (data) => {
    console.log(data.token)
    setIsUserLoggedIn(data.success);
    // getUser(data.token)
  }

  console.log(`isUserLoggedIn: ${isUserLoggedIn}`)
  console.log(`user: ${user}`)
  return (
    <Router>
      <Nav />
    <>
      <Switch>
        <Route path="/freelancers" render={props => (
           <FreelancersList {...props} isUserLoggedIn={isUserLoggedIn}/>
        )}/>
        
        <Route path="/auth">
          <Auth handleLogin={handleLogin}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
        <ProtectedRoute exact path='/dashboard' isUserLoggedIn={isUserLoggedIn}>
          <Dashboard />
        </ProtectedRoute>
    </>
  </Router>
  );
}

export default App;
