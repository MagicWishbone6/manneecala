import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Player({ order, score }) {
    const name = order === 1 ? "Computer" : "You";

	return (
		<Row>
			<Col md="auto">
				<h3>Player {order}</h3>
			</Col>
			<Col md="auto">
				<h3>({name})</h3>
			</Col>
			<Col md="auto">
				<h3>{score}</h3>
			</Col>
		</Row>
	);
}
