function one(number) {
	let result = ''

	for (let i = number; i >= 1; i--) {

		for (var j = 0; j <= number; j++) {
			if (j < i) {
				result += ' '
			} else {
				result += '*'
			}
		}
		result += '\n'
	}
	console.log(result)
}

one(5)
