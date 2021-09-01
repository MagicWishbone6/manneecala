import "./App.css";
import Board from "./components/Board";
import Navbar from "react-bootstrap/Navbar";

export default function App() {
	return (
		<div className="App m-5">
			<Board />
			<Navbar variant="dark" bg="dark" fixed="bottom" />
		</div>
	);
}
