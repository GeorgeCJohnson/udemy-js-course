'use strict';

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    
}
    
    const countryOne = describeCountry("Finland", 6, "Helsinki");
    console.log(countryOne);

    const countryTwo = describeCountry("United States", 300, "Washington");
    console.log(countryTwo);

    const countryThree = describeCountry("Mexico", 20, "Mexico City");
    console.log(countryThree);
