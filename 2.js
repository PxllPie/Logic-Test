function star(number) {
	let result = ''

	for (let i = 1; i <= number; i++) {

		for (var j = 0; j <= number - i; j++) {
			result += '*'
		}
		result += '\n'
	}
	console.log(result)
}

star(5)
