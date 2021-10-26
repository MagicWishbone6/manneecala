import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Side from "./Side";
import Col from "react-bootstrap/Col";
import Bank from "./Bank";
import Row from "react-bootstrap/Row";
import Player from "../game/Player";
import NavBar from "./NavBar";
import getIndexDifference from "../utilities/getIndexDifference";

export default function Board() {
	const [numBeadsToPass, setNumBeadsToPass] = useState(0);
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

	// cups and banks are listed here in counter-clockwise order, the direction of gameplay,
	// starting with cupF1 and going all the way around to bank2
	const cupsAndBanks = [
		"cupF1",
		"cupE1",
		"cupD1",
		"cupC1",
		"cupB1",
		"cupA1",
		"bank1",
		"cupA2",
		"cupB2",
		"cupC2",
		"cupD2",
		"cupE2",
		"cupF2",
		"bank2",
	];

	const passBead = () => {
		let nextCupValue = cupAndBankValues[cupsAndBanks[nextCupOrBank]] + 1;
		setCupAndBankValues({
			...cupAndBankValues,
			[cupsAndBanks[nextCupOrBank]]: nextCupValue,
		});
		setNumBeadsToPass(numBeadsToPass - 1);
		setNextCupOrBank(nextCupOrBank + getIndexDifference(nextCupOrBank, cupsAndBanks));
	};

	useEffect(() => {
		let timeout;
		if (numBeadsToPass > 0) {
			timeout = setTimeout(() => {
				passBead();
			}, 500);
		}

		return () => {
			clearTimeout(timeout);
		};
	});

	const handleClickCupButton = (event) => {
		const clickedCupID = "cup" + event.target.id.substr(1, 2);
		setNumBeadsToPass(cupAndBankValues[clickedCupID]);
		setCupAndBankValues({ ...cupAndBankValues, [clickedCupID]: 0 });
		setNextCupOrBank(cupsAndBanks.indexOf(clickedCupID) + 1);
	};

	return (
		<Container fluid>
			<Player order={1} score={cupAndBankValues.bank1} />
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
					<Bank playerNum={2} value={cupAndBankValues.bank2} />
				</Col>
			</Row>
			<Player order={2} score={cupAndBankValues.bank2} />
			<NavBar />
		</Container>
	);
}
