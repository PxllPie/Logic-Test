function count_vowels(str) {
	var vocal = 'aeiouAEIOU';
	var count = 0;

	for (let i = 0; i < str.length; i++) {
		if (vocal.indexOf(str[i]) !== -1) {
			count++
		}
	}
	console.log(count)
}

count_vowels('programmer')