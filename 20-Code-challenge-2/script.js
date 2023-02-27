// const markMass= 78;
// const markHeight= 1.69;
// const johnMass= 92;
// const johnHeight= 1.95;

const markMass= 60;
const markHeight= 1.69;
const johnMass= 92;
const johnHeight= 1.95;

const markBmi=markMass / markHeight ** 2;
console.log(markBmi)

const johnBmi=johnMass / johnHeight ** 2;
console.log(johnBmi)

const markHigherBmi=markBmi>johnBmi
console.log(markHigherBmi)


if (markBmi > johnBmi) {
    console.log(`Mark's BMI (${markBmi}) is higher than Johns's! ${johnBmi})`);
} else {
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi}`);
}