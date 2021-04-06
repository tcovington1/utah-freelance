import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Freelancers } from "./components/Freelancers";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
    <div>
      <Switch>
        <Route path="/freelancers">
          <Freelancers />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
