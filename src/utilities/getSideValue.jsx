export default function getSideValue(side, object) {
    let result = 0
	for (const [key, value] of Object.entries(object)) { 
		if (side === 1 && key.indexOf("1") > -1 && key.indexOf("cup") > -1) {
			result += value
		} else if (side === 2 && key.indexOf("2") > -1 && key.indexOf("cup") > -1) {
			result += value
		}
	}
	return result
}