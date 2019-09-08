import React  from 'react';
import {TicNavbar} from './components/Navbar';
import {Layout} from './components/Layout';


export const TicTacToe = () => (
	<Layout>
			<TicNavbar/>
			<style> body {
				background-color: 
			}
			<canvas id = 'ttt'></canvas>
			<p id ='message'>Welcom to TTT</p>
			<script src = "components/ttt.js"></script>
			<input style ={{ margin:"20px auto",display:"block"}} type="text" name="Move array"/>
			<button>Submit</button>
	</Layout>
)