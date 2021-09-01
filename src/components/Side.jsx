import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cup from "./Cup";

export default function Side() {
	return (
		<Row>
			<Col>
				<Cup className="cupA" />
			</Col>
			<Col>
				<Cup className="cupB" />
			</Col>
			<Col>
				<Cup className="cupC" />
			</Col>
			<Col>
				<Cup className="cupD" />
			</Col>
			<Col>
				<Cup className="cupE" />
			</Col>
			<Col>
				<Cup className="cupF" />
			</Col>
		</Row>
	);
}
