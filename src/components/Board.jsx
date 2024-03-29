import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Side from "./Side";
import Col from "react-bootstrap/Col";
import Bank from "./Bank";
import Row from "react-bootstrap/Row";
import Player from "../game/Player";
import getIndexDifference from "../utilities/getIndexDifference";
import getSideValue from "../utilities/getSideValue";

export default function Board() {
	const [numBeadsToPass, setNumBeadsToPass] = useState(0);
	const [playerTurn, setPlayerTurn] = useState(2)
	const [nextCupOrBank, setNextCupOrBank] = useState(null);
	const [cupAndBankValues, setCupAndBankValues] = useState({
		cupF1: 4,
		cupE1: 4,
		cupD1: 4,
		cupC1: 4,
		cupB1: 4,
		cupA1: 4,
		bank1: 0,
		cupA2: 4,
		cupB2: 4,
		cupC2: 4,
		cupD2: 4,
		cupE2: 4,
		cupF2: 4,
		bank2: 0,
	});

	// cups and banks are listed in counter-clockwise order, the direction of gameplay,
	// starting with cupF1 and going all the way around to bank2
	const cupsAndBanks = Object.keys(cupAndBankValues)

	useEffect(() => {
		let timeout;
		if (numBeadsToPass > 0) {
			timeout = setTimeout(() => {
				let nextCupValue = cupAndBankValues[cupsAndBanks[nextCupOrBank]] + 1;
				setCupAndBankValues({
					...cupAndBankValues,
					[cupsAndBanks[nextCupOrBank]]: nextCupValue,
				});
				if (numBeadsToPass === 1 && playerTurn === 1 && getSideValue(2, cupAndBankValues) > 0) {
					setPlayerTurn(2)
				} else if (numBeadsToPass === 1 && playerTurn === 2 && getSideValue(1, cupAndBankValues) > 0) {
					setPlayerTurn(1)
				}
				setNumBeadsToPass(numBeadsToPass - 1);
				setNextCupOrBank(() => {
					let newNextIndex =
						nextCupOrBank + getIndexDifference(nextCupOrBank, cupsAndBanks);
					if (
						(cupsAndBanks[newNextIndex] === "bank1" &&
							playerTurn === 2) ||
						(cupsAndBanks[newNextIndex] === "bank2" &&
							playerTurn === 1)
					) {
						newNextIndex++;
					}
					return newNextIndex
				});
			}, 500);
		}

		return () => {
			clearTimeout(timeout);
		};
	});

	const handleClickCupButton = (event) => {
		const clickedCupID = "cup" + event.target.id.substr(1, 2);
		if ((playerTurn === 1 && clickedCupID.indexOf("2") > -1) || (playerTurn === 2 && clickedCupID.indexOf("1") > -1)) {
			alert(`Player ${playerTurn} can only use cups on Side ${playerTurn}.`)
			return
		} 
		setNumBeadsToPass(cupAndBankValues[clickedCupID]);
		setCupAndBankValues({ ...cupAndBankValues, [clickedCupID]: 0 });
		setNextCupOrBank(cupsAndBanks.indexOf(clickedCupID) + 1);
	};

	return (
		<Container fluid>
			<Player order={1} score={cupAndBankValues.bank1} turn={playerTurn} />
			<Row>
				<Col xl="2">
					<Bank playerNum={1} value={cupAndBankValues.bank1} />
				</Col>
				<Col>
					<Side
						playerNum={1}
						onClickCupButton={handleClickCupButton}
						cupValues={cupAndBankValues}
					/>
					<br />
					<Side
						playerNum={2}
						onClickCupButton={handleClickCupButton}
						cupValues={cupAndBankValues}
					/>
				</Col>
				<Col xl="2">
					<Bank
						playerNum={2}
						value={cupAndBankValues.bank2}
					/>
				</Col>
			</Row>
			<Player order={2} score={cupAndBankValues.bank2} turn={playerTurn} />
		</Container>
	);
}
