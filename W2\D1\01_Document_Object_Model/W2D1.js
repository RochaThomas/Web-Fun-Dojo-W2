
var floor = Math.floor(1.8);
//1
var ceiling = Math.ceil( Math.PI );
//4
var random = Math.random();
//random num between 0.0 inclusive and 1 not inclusive
    
console.log(floor);
console.log(ceiling);
console.log(random);

//Dice Roller
function d6() {
    var roll = Math.random();
    roll = (Math.floor(roll * 6)) + 1;
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = lifesAnswers[Math.floor(Math.random() * (lifesAnswers.length))];
console.log(answer);