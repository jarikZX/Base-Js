const score = [5, 10, 15, 0];

for (const [i, el] of score.entries()) {
    console.log(`Раунд ${i + 1}: ${el}`);
}
score.forEach((el , i) => {
    console.log(`Раунд ${i + 1}: ${el}`);
})
//(5, 0) => {...}
//(10, 1) => {...}