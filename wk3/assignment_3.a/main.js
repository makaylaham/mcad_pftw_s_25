let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor;
let heading;
let statements = [
    {question: 'What is an eight-sided shape called?', answer: 'octagon'},
    {question: 'What is the chemical element with the symbol Fe?', answer: 'iron'},
    {question: 'What animal sleeps up to 22 hours a day?', answer: 'koala'},
    {question: 'What is the only fruit with seeds on the outside?', answer: 'strawberry'},
    {question: 'What kind of dog is Scooby-Doo?', answer: 'Great Dane'},
    {question: 'What is the fourth planet from the Sun?', answer: 'Mars'}
];



function setup() {
    createCanvas(800, 600);
    background('gold');
    heading = createElement('h1', ["Quiz Game"]);
    heading.position(50, 50);

    questionInput = createInput('');
    questionInput.size(250, 30);
    questionInput.position(150, 200);

    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.size(150, 20);
    submitAnswerButton.mousePressed (checkQuestion);
    submitAnswerButton.position(200, 230);

    
}

function next() {
    if(statements.length < 1) {
        alert ('YOU HAVE WON THE GAME!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

currentQuestion = next();
let message = currentQuestion.question;

function draw() {
    background('gold');
    fill ('black');
    textSize (20);
    text(message, 100, 150);
    //fill (responseColor); 
    // the fill(responseColor); kept giving me an error and would not show my response
    text(response, 100, 350);
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        statements = statements.filter(statementObj => {
            return currentQuestion.answer !== statementObj.answer;
        });
        response = 'correct! you may move on to the next question!';
        responseColor = 'green';
    } else {
        response = 'Sorry! you are wrong...let\'s try another one!';
        responseColor = 'red';
    }
    currentQuestion = next();
    questionInput.value('');
    if (currentQuestion){
        message = currentQuestion.question;
    }

    // if (currentQuestion.answer !== questionInput.value()) {
    //     alert ('YOU HAVE LOST THE GAME ... REFRESH TO PLAY AGAIN');
    // }

    // NOTE FOR ABOVE : I cannot figure out how to display this after 5 incorrect answers
    
    
}

function endGame() {
   
}