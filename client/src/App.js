import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Dashboard } from "./components/App/Dashboard";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";
import { FreelancersList } from "./components/FreelancersList";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
    <>
      <Switch>
        <Route path="/freelancers">
          <FreelancersList />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
        <ProtectedRoute exact path='/dashboard'>
          <Dashboard />
        </ProtectedRoute>
    </>
  </Router>
  );
}

export default App;
