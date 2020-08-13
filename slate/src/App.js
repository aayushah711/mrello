import React, { Component } from 'react';
import './App.css';
import Retrieve from './Components/Retrieve';
import CreateList from './Components/Create';
import Board from './Components/Board';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDark: false
		};
	}

	toggleDark = () => {
		this.setState({
			isDark: true
		});
	};

	toggleLight = () => {
		this.setState({
			isDark: false
		});
	};

	render() {
		const { isDark } = this.state;
		const { toggleDark, toggleLight } = this;
		return (
			<div className="App">
				<Board theme={{ isDark, toggleDark, toggleLight }} />
			</div>
		);
	}
}

export default App;
