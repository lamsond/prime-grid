import React from 'react';
import {Number} from './Number.js';

export class App extends React.Component{

	createNumbers(){
		const maxNum = 5000;
		let numbers = [];
		for(let i = 2; i <= maxNum; i++){
			numbers.push(<Number n={i} />);
		}
		return numbers;
	}	

	render(){

		return (
				<main>
					<Number n={1} id="unity" />
					{this.createNumbers()}
				</main>
				);
	}
}
