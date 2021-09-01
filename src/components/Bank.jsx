import Button from "react-bootstrap/Button";

export default function Bank() {
	var value = 0

	return (
		<div className="bg-dark border border-secondary" style={{height: '100%'}}>
			<Button variant="outline-primary">Bank {value}</Button>
		</div>
	);
}
