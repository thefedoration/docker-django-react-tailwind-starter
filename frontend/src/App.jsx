import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  // Route,
} from "react-router-dom";

import Auth from './components/auth.jsx';
import Home from './pages/home.jsx';
import Account from './pages/account.jsx';
import Login from './pages/login.jsx';
import PropsRoute from './components/propsroute.jsx';

const App = () => (
  <Router>
  	<Auth>
  		{
  			(authProps) => (
		  		<Switch>
			      <PropsRoute exact path="/" component={Home} {...authProps} />
			      <PropsRoute path="/account/" component={Account}  {...authProps} />
            <PropsRoute path="/login/" component={Login}  {...authProps} />
			    </Switch>
			  )
  		}
  	</Auth>
  </Router>
);

export default App;

