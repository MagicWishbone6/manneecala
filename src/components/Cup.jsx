import Button from "react-bootstrap/Button";
import React from "react";
import Row from "react-bootstrap/Row";
import Bead from "./Bead";
import Container from "react-bootstrap/Container";

export default class Cup extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: 4 };
	}

	displayBeads() {
		var beads = []
		for (let i = 0; i < this.state.value; i++) {beads.push('b')}
		return beads.map(bead => <Bead />)
	}

	render() {
		return (
			<Container
				className="bg-secondary border border-primary"
				style={{ height: "125px" }}
			>
				<Row>
					<Button variant="outline-info">
						P{this.props.playerNum} Cup {this.state.value}
					</Button>
				</Row>
				<Row>{this.displayBeads()}</Row>
			</Container>
		);
	}
}
