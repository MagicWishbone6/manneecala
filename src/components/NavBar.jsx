import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import startGame from "../game/startGame";

export default function NavBar() {
    return (
        <Navbar variant="dark" bg="dark" fixed="bottom">
            <Container>
                <Navbar.Brand>mancala</Navbar.Brand>
                <Nav className="me-auto">
                    <Button variant="success" onClick={startGame}>Start Game</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}