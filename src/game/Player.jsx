import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Player({order}) {
    var score = 0

    return (
        <Row>
            <Col md="auto">
                <h3>Player {order}</h3>
            </Col>
            <Col md="auto">
                <h3>{score}</h3>
            </Col>
        </Row>
    )
}