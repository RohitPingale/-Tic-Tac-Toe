import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './home';
import {Aboutus} from './about';
import {TicTacToe} from './tictactoe';
import {Nomatch} from './nomatch';


class App extends Component {
  render() {
  return (
    <div id = 'root'>
      <React.Fragment>
        <Router>
          <Switch>
             <Route  path = '/(home|)' component = {Home} />
             <Route  path = '/aboutus' component = {Aboutus} />
             <Route  path = '/tictactoe' component = {TicTacToe} />
             <Route  component = {Nomatch} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>    
    );
  }
}
export default App;
