function sumOfOddNumbers(n) {
    n = Number(n);
    let sum = 0;
    for (let i = 1; i <= 2 * n; i += 2) {
        console.log(i);
        sum += i;
    }
    console.log(`Sum: ${sum}`);
}