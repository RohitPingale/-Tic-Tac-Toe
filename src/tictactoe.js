import React  from 'react';
import {TicNavbar} from './components/Navbar';
import {Layout} from './components/Layout';


export const TicTacToe = () => (
	<Layout>
			<TicNavbar/>
			<input style ={{ margin:"20px auto",display:"block"}} type="text" name="Move array"/>
			<button>Submit</button>
	</Layout>
)