import "./App.css";
import Board from "./components/Board";
import NavBar from "./components/NavBar";
import Player from "./game/Player";

export default function App() {
	return (
		<div className="App m-5">
			<Player order={1} />
			<Board />
			<Player order={2} />
			<NavBar />
		</div>
	);
}
