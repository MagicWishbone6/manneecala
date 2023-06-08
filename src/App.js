import Board from "./components/Board";
import NavBar from "./components/NavBar";
import { Routes, Route} from "react-router-dom";

export default function App() {
	return (
		<div className="App m-5">
			<Board />
			<NavBar />
			<Routes>
				<Route path="/" element={<Board />} />
			</Routes>
		</div>
	);
}
