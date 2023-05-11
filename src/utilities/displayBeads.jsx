import Bead from "../components/Bead";

export function displayBeads(value) {
	var beads = [];
	for (let i = 0; i < value; i++) {
		beads.push("b");
	}
	return beads.map((bead, i) => <Bead key={i} />);
}
