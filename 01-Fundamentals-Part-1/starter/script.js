// const country="United States";
// let continent="North America";
// let population=1005;
// const isIsland="false";
// let language="English";
// let finland=500
// let avgCountry=250

// // console.log (typeof isIsland);
// // console.log (typeof population);
// // console.log (typeof country);
// // console.log (typeof language);
// // console.log(population/2)
// // console.log (population>finland)
// // console.log (avgCountry>population)

// // const description1= `The ${country} is in ${continent}, and its ${population} people speak ${language}`;

// // console.log (description1)
// // const languagePref = true;
// // const popPref = false;
// // const landType = false;

// // if (languagePref && popPref && landType) 
// //     {console.log('Yes! Sarah should move to America');
// // } else (console.log('Sarah should run away!!!'))

// // OR the following which was the answer provided//

// if (language === 'English' && !population < 50 && isIsland)
// {
//     console.log(`Sarah should live in ${country}`);
// } else {
//     console.log(`${country} Sarah should run!`);
// }


// const day = "Saturday";

// if (day === "Monday") {
//     console.log("Monday");
// } else if (day === "Tuesday") {
//     console.log("Tuesday");
// } else if (day === "Wednesday" || day ==="Thursday") {
//     console.log("middle");
// } else {
//     console.log("other");
// }
const language="Portugese"

switch(language) {
    case "Chinese": 
    case "Mandarin":
        console.log("MOST number of native speakers");
        break;
    case "Spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "English": 
        console.log("3rd place");
        break;
    case "Hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
        default:
            console.log("Great language too :D");
}        