import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory , IndexRoute , IndexLink} from 'react-router';


import './style.css';


import About from './About';
import Home from './Home';
import Repos from './Repos';
import RepoDetails from './RepoDetails';
import ServerError from './ServerError';

class App extends Component{

  render(){
    return(
      <div>
          <header>App</header>
          <menu>
            <ul>
            <Link to="/">Home</Link>
              <li><IndexLink to="/">Home</IndexLink></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/repos" activeClassName="active">Repos</Link></li>
            </ul>
          </menu>
          {this.props.children}
      </div>
    );

  }

}

render((
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} title="About Us"/>
      <Route path="repos" component={Repos}>
        {/*<Route path="details/:repo_name" component={RepoDetails}/> */}
        <Route path="/repo/:repo_name" component={RepoDetails}/>
      </Route>
      <Route path="error" component={ServerError} />
    </Route>
  </Router>
), document.getElementById('root'));
