import React, { Component } from 'react';
import CardList from './components/cardlist/cardlist.component';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			monsters: []
		};
	}

	// loading data from the external api or server
	componentDidMount() {
		fetch('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users')
			.then((res) =>
				// this.setState({monsters: })
				res.json()
			)
			.then((data) => {
				this.setState({ monsters: data });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<h1 className="title">Monosters Rolodex</h1>
				<CardList monosters={this.state.monsters} />
			</div>
		);
	}
}

export default App;
