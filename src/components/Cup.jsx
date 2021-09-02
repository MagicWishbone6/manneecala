import Button from "react-bootstrap/Button";
import React from 'react';

export default class Cup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {value: 4}
	}

	render() {
		return (
			<div className="bg-secondary border border-primary" style={{height: '100px'}}>
				<Button variant="outline-info">Cup {this.state.value}</Button>
			</div>
		)
	}
}
