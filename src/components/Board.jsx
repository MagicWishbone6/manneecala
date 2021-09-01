import Container from "react-bootstrap/Container";
import Side from "./Side";
import Col from "react-bootstrap/Col";
import Bank from "./Bank";
import Row from "react-bootstrap/Row";

export default function Board() {
	return (
		<Container fluid>
			<Row>
				<Col xl="2">
					<Bank />
				</Col>
				<Col>
					<Side />
					<br />
					<Side />
				</Col>
				<Col xl="2">
					<Bank />
				</Col>
			</Row>
		</Container>
	);
}
