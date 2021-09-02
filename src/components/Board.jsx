import Container from "react-bootstrap/Container";
import Side from "./Side";
import Col from "react-bootstrap/Col";
import Bank from "./Bank";
import Row from "react-bootstrap/Row";
import Player from "../game/Player";

export default function Board() {
	return (
		<Container fluid>
			<Player order={1} />
			<Row>
				<Col xl="2">
					<Bank playerNum={1}/>
				</Col>
				<Col>
					<Side playerNum={1}/>
					<br />
					<Side playerNum={2}/>
				</Col>
				<Col xl="2">
					<Bank playerNum={2}/>
				</Col>
			</Row>
			<Player order={2} />
		</Container>
	);
}
