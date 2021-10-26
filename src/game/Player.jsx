import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Player({ order, score, turn }) {
    const name = order === 1 ? "Computer" : "You";

	const fontColor = turn ? "pink" : "gray"

	return (
		<Row id={`player${order}Row`} style={{color: fontColor}}>
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
