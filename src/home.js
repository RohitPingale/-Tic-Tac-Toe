import React  from 'react';
import { Card, Button, Image } from "react-bootstrap";

export const Home  = () => (
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
	)