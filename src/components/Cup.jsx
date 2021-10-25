import Button from "react-bootstrap/Button";
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { displayBeads } from "../utilities/displayBeads";

export default class Cup extends React.Component {
	constructor(props) {
		super(props);
		this.buttonId = "b" + this.props.id.substr(3,4)
	}

	render() {
		return (
			<Container
				className="bg-secondary border border-primary"
				style={{ height: "125px" }}
				id={this.props.id}
			>
				<Row>
					<Button variant="outline-info" onClick={this.props.onClick} id={this.buttonId}>
						{this.props.id} {this.props.value}
					</Button>
				</Row>
				<Row>{displayBeads(this.props.value)}</Row>
			</Container>
		);
	}
}
