import diamond from "../sprites/pinkDiamond25.png";
import Image from "react-bootstrap/Image";

export default function Bead() {
	return <Image src={diamond} style={{ maxWidth: "45px" }} />;
}
