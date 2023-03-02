'use strict';

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    
// }
    
//     const countryOne = describeCountry("Finland", 6, "Helsinki");
//     console.log(countryOne);

//     const countryTwo = describeCountry("United States", 300, "Washington");
//     console.log(countryTwo);

//     const countryThree = describeCountry("Mexico", 20, "Mexico City");
//     console.log(countryThree);

// function percentageOfWorld1(country, population, percTotal) {
//     return `${country}'s ${population} people are ${percTotal} of the total world population.`;
// }
// const combo1= percentageOfWorld1("China", 1441, 1441 / 7900 * 100);
// console.log(combo1);

// const combo2= percentageOfWorld1("US", 230, 230 / 7900 * 100);
// console.log(combo2);

// const combo3= percentageOfWorld1("Finland", 6, 6 / 7900 * 100);
// console.log(combo3);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentageOfWorld2 = function (population) {
//     return (population / 7900) *100;
// };

// const percPortugal1= percentageOfWorld1(10);
// const percChina= percentageOfWorld1(1441);
// const perUSA1= percentageOfWorld1(332);
// console.log(percPortugal1, percChina, percPortugal1);

// const percentageOfWorld3 = population => (population / 7900 * 100);
// const percPortugal1= percentageOfWorld3(10);
// const percChina= percentageOfWorld3(1441);
// const perUSA1= percentageOfWorld3(332);
// console.log(percPortugal1, percChina, percPortugal1);

// function percentageOfWorld1(people) {
//         return (population / 7900) * 100;
//     }

function percentageOfWorld1(population) {
        return (population / 7900) * 100;
    }

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
    console.log(description);
}
describePopulation('Portugal', 10);
describePopulation("China", 1441);
describePopulation("USA", 332);