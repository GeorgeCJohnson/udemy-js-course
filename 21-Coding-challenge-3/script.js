let dolphinsScore = ((96 + 108 + 55) /3);
let koalasScore = ((96 + 108 + 78) / 3);
console.log(dolphinsScore, koalasScore)
if (dolphinsScore > koalasScore && dolphinsScore >= 100){
    console.log("Dolphins win! 🏆");
} else if (koalasScore > dolphinsScore && koalasScore >= 100){
    console.log("Koala's win!!🏆");
} else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100){
    console.log("It's a draw!")
}
 else {console.log('There is no winner');}   