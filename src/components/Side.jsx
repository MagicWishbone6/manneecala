import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cup from "./Cup";

export default function Side({playerNum}) {
	return (
		<Row>
			<Col>
				<Cup id={`cupA${playerNum}`} />
			</Col>
			<Col>
				<Cup id={`cupB${playerNum}`} />
			</Col>
			<Col>
				<Cup id={`cupC${playerNum}`} />
			</Col>
			<Col>
				<Cup id={`cupD${playerNum}`} />
			</Col>
			<Col>
				<Cup id={`cupE${playerNum}`} />
			</Col>
			<Col>
				<Cup id={`cupF${playerNum}`} />
			</Col>
		</Row>
	);
}
