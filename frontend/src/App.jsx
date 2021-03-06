import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  // Route,
} from "react-router-dom";

import Auth from './components/auth.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Account from './pages/account.jsx';
import Login from './pages/login.jsx';
import PropsRoute from './components/propsroute.jsx';

const App = (props) => (
  <Router>
  	<Auth {...props}>
  		{
  			(authProps) => (
		  		<Switch>
			      <PropsRoute exact path="/" component={Home} {...authProps} />
            <PropsRoute path="/account/" component={Account} authRequired={true} {...authProps} />
            <PropsRoute path="/about/" component={About} />
            <PropsRoute path="/login/" component={Login} />
            <Redirect to="/" /> {/* catchall. can replace with 404 */}
			    </Switch>
			  )
  		}
  	</Auth>
  </Router>
);

export default App;

