const questions  = [
    {
        question:"Which is largest animal in the world",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Giraffe", correct: false},
        ]
    },
    {
        question:"which country have largest mountain in the world",
        answers: [
            {text:"Nepal", correct: true},
            {text:"Pakistan", correct: false},
            {text:"Iran", correct: false},
            {text:"Afganistan", correct: false},
        ]
    },
    {
        question:"Which is the largest desert in the world",
        answers: [
            {text:"Kalahari", correct: false},
            {text:"Gobi", correct: false},
            {text:"Sahara", correct: false},
            {text:"Antarctica", correct: true},
        ]
    },
    {
        question:"Which is the smallest continent in the world",
        answers: [
            {text:"Asia", correct: false},
            {text:"Australia", correct: true},
            {text:"Arctic", correct: false},
            {text:"Africa", correct: false},
        ]
    },
    {
        question:"What is the approximate diameter of Earth",
        answers: [
            {text:"6,000 kilometers", correct: false},
            {text:"12,000 kilometers", correct: false},
            {text:"8,000 miles", correct: true},
            {text:"20,000 miles", correct: false},
        ]
    },
    {
        question:"Which layer of Earth's atmosphere is closest to the planet's surface",
        answers: [
            {text:"Troposphere", correct: true},
            {text:"Stratosphere", correct: false},
            {text:"Mesosphere", correct: false},
            {text:"Thermosphere", correct: false},
        ]
    },
    {
        question:"What percentage of Earth's surface is covered by water",
        answers: [
            {text:"Approximately 50% ", correct: false},
            {text:"Approximately 70%", correct: true},
            {text:"Approximately 30%", correct: false},
            {text:"Approximately 90%", correct: false},
        ]
    },
    {
        question:"What is the primary gas in Earth's atmosphere",
        answers: [
            {text:"Oxygen", correct: true},
            {text:"Nitrogen", correct: false},
            {text:"Carbon dioxide", correct: false},
            {text:"Hydrogen", correct: false},
        ]
    },
    {
        question:"Which of the following is NOT a type of plate boundary on Earth",
        answers: [
            {text:"Divergent boundary", correct: false},
            {text:"Convergent boundary", correct: false},
            {text:"Colliding boundary", correct: false},
            {text:"Transform boundary", correct: true},
        ]
    },
    {
        question:"What is the name of the largest ocean on Earth",
        answers: [
            {text:"Atlantic Ocean", correct: false},
            {text:"Indian Ocean", correct: false},
            {text:"Pacific Ocean", correct: true},
            {text:"Arctic Ocean", correct: false},
        ]
    },
    {
        question:"Which of the following is NOT a layer of Earth's interior",
        answers: [
            {text:"Crust", correct: false},
            {text:"Mantle", correct: false},
            {text:"Core", correct: false},
            {text:"Ionosphere", correct: true},
        ]
    },
    {
        question:"What causes the phenomenon known as auroras",
        answers: [
            {text:"Solar wind interacting with Earth's magnetic field", correct: true},
            {text:"Tidal forces from the Moon", correct: false},
            {text:"Volcanic eruptions", correct: false},
            {text:"Greenhouse gases in the atmosphere", correct: false},
        ]
    },
    {
        question:"What is the approximate age of Earth",
        answers: [
            {text:"4 billion years", correct: true},
            {text:"10,000 years", correct: false},
            {text:"1 million years", correct: false},
            {text:"500 million years", correct: false},
        ]
    },
    {
        question:"Which of the following is NOT a factor contributing to Earth's climate",
        answers: [
            {text:"Atmospheric composition", correct: false},
            {text:" Solar radiation", correct: false},
            {text:"Earth's rotation speed", correct: true},
            {text:"Ocean currents", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
};

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML ="Play Again";
    nextButton.style.display = "block";
}

function hendleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length ){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        hendleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();