export default function getOperation(operation) {
	if (operation === "AndContext") {
		return "∧";
	}
	if (operation === "OrContext") {
		return "∨";
	}
	if (operation === "EqContext") {
		return "⇔";
	}
	throw "Incompatible input!";
}

export function getOperationConjDisj(operation) {
    if (operation === "AndContext") {
        return "∧";
    }
    if (operation === "OrContext") {
		return "∨";
	}
	throw "Incompatible input!";
}