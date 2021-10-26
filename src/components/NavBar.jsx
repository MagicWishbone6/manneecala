import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function NavBar() {
	return (
		<Navbar variant="dark" bg="dark" fixed="bottom">
			<Container>
				<Navbar.Brand>mancala</Navbar.Brand>
				<Nav className="me-auto">
					<Button variant="success">Start Game</Button>
				</Nav>
				<Nav className="me-auto">
					<Button variant="success">Reset Game</Button>
				</Nav>
			</Container>
		</Navbar>
	);
}
