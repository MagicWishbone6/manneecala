import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cup from "./Cup";

export default function Side({onClickCupButton, playerNum, cupValues}) {
	return (
		<Row>
			<Col>
				<Cup id={`cupA${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupA${playerNum}`]}/>
			</Col>
			<Col>
				<Cup id={`cupB${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupB${playerNum}`]}/>
			</Col>
			<Col>
				<Cup id={`cupC${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupC${playerNum}`]}/>
			</Col>
			<Col>
				<Cup id={`cupD${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupD${playerNum}`]}/>
			</Col>
			<Col>
				<Cup id={`cupE${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupE${playerNum}`]}/>
			</Col>
			<Col>
				<Cup id={`cupF${playerNum}`} playerNum={playerNum} onClick={onClickCupButton} value={cupValues[`cupF${playerNum}`]}/>
			</Col>
		</Row>
	);
}
