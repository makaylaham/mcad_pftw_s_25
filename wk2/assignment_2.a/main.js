const quiz = [
    {
        question: "What is an eight-sided shape called?",
        answer: "Octagon"
    },
    {
        question: "What is the chemical element with the symbol 'Fe'?",
        answer: "Iron"
    },
    {
        question: "What animal sleeps up to 22 hours a day?",
        answer: "Koala"
    },
    {
        question: "What is the only fruit with seeds on the outside?",
        answer: "Strawberry"
    }
];

// const userInput = window.prompt (quiz[0].question);

// if (userInput === quiz[0].answer) {
//    window.alert ("You answered " + userInput + "! The correct answer was " + quiz[0].answer + "!") 
// }
// else{
//     window.alert ("Nope! Sorry, try again!")
// }



const randomNumber = Math.floor(Math.random() * quiz.length);


const userInput = window.prompt(quiz[randomNumber].question);
if (userInput === quiz[randomNumber].answer) {
    window.alert("You answered " + userInput + "! The correct answer was " + quiz[randomNumber].answer + "!");
}
else{
    window.alert ("Sorry, you are incorrect. Refresh to try another question!"); 
}