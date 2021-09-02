import "./App.css";
import Board from "./components/Board";
import NavBar from "./components/NavBar";

export default function App() {
	return (
		<div className="App m-5">
			<Board />
			<NavBar />
		</div>
	);
}
