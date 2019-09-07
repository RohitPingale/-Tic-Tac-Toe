import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './home';
import {Aboutus} from './about';
import {TicTacToe} from './tictactoe';
import { Card, Button, Image } from "react-bootstrap";

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
              <div> 
                <Image src= {require("./images/UnderConstruction.png")}/>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={require("./images/index.jpg")} />
                  <Card.Body>
                    <Card.Title>Tic-Tac-Toe</Card.Title>
                    <Card.Text>
                      Play Tictactoe
                    </Card.Text>
                    <Button variant="primary" href = '/tictactoe'>Go</Button>
                  </Card.Body>
                </Card>
              </div>
          </Switch>
        </Router>
      </React.Fragment>
    </div>    
    );
  }
}
export default App;
