import Button from "react-bootstrap/Button";
import Bead from "./Bead";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export default function Bank({playerNum}) {
	var value = 0

	function displayBeads() {
		var beads = []
		for (let i = 0; i < value; i++) {beads.push('b')}
		return beads.map(bead => <Bead />)
	}

	return (
		<Container className="bg-dark border border-secondary" style={{height: '100%'}}>
			<Row>
			<Button variant="outline-primary" id={`bank${playerNum}`}>P{playerNum} Bank {value}</Button>
			</Row>
			<Row>{displayBeads()}</Row>
		</Container>
	);
}
