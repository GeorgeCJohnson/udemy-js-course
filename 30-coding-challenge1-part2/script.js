'use strict'

const calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;

// Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage (65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// Test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage (23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas){
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    else {
        console.log(`No team wins`)
    }
}
checkWinner(scoreDolphins, scoreKoalas)