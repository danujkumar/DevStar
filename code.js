const maxSequence = (arr = []) => {
	let currentSum = 0;
	let maxSum = 0;

	for (let elem of arr) {
		const nextSum = currentSum + elem;
		maxSum = Math.max(maxSum, nextSum);
		currentSum = Math.max(nextSum, 0);
	}

	return maxSum;
};
