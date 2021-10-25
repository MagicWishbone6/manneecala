import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { displayBeads } from "../utilities/displayBeads";

export default function Bank({ playerNum, value }) {
	return (
		<Container
			className="bg-dark border border-secondary"
			style={{ height: "100%" }}
		>
			<Row>
				<Button variant="outline-primary" id={`bank${playerNum}`}>
					P{playerNum} Bank {value}
				</Button>
			</Row>
			<Row>{displayBeads(value)}</Row>
		</Container>
	);
}
