import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cup from "./Cup";

export default function Side({playerNum}) {
	return (
		<Row>
			<Col>
				<Cup id={`cupA${playerNum}`} playerNum={playerNum} />
			</Col>
			<Col>
				<Cup id={`cupB${playerNum}`} playerNum={playerNum} />
			</Col>
			<Col>
				<Cup id={`cupC${playerNum}`} playerNum={playerNum} />
			</Col>
			<Col>
				<Cup id={`cupD${playerNum}`} playerNum={playerNum} />
			</Col>
			<Col>
				<Cup id={`cupE${playerNum}`} playerNum={playerNum} />
			</Col>
			<Col>
				<Cup id={`cupF${playerNum}`} playerNum={playerNum} />
			</Col>
		</Row>
	);
}
