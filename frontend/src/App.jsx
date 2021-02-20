import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/home.jsx';
import Account from './pages/account.jsx';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/account/" component={Account} />
    </Switch>
  </Router>
);

export default App;

