import React from 'react'

export class Number extends React.Component{
	
	isPrime(n){

		for(let i = 2; i <= Math.sqrt(n); i++){
			if(n % i == 0){
				return false;
			}
		}
		return true;
	}

	render(){

		let divStyle = {
			width: '100%',
			height: 50,
			fontSize: 20,
			paddingTop: 15,
			textAlign: 'center',
			color: '#38567B',
		}

		let numType = this.isPrime(this.props.n) ? 'prime':'comp'
			
		return (
				<div style={divStyle} className={numType} id={this.props.id}>
				{this.props.n}
				</div>
				);
	}
}
