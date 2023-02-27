const markMass= 78;
const markHeight= 1.69;
const johnMass= 92;
const johnHeight= 1.95;

const markBmi=markMass / markHeight ** 2;
console.log(markBmi)

const johnBmi=johnMass / johnHeight ** 2;
console.log(johnBmi)

const markHigherBmi=markBmi>johnBmi
console.log(markHigherBmi)

console.log(markBmi, johnBmi, markHigherBmi);