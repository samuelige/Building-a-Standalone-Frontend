import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigator from "./shared/components/Navigation/MainNavigator";

// import './App.css';

function App() {
  return (
    <Router>
      <MainNavigator />
      <main>
        <Switch>
          <Route path='/' exact>
            <Users />
          </Route>
          <Route path='/places/new' exact>
            <NewPlace />
          </Route>
          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
