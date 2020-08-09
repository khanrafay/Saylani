const quiz = [
    {
        question: "What is my name?",
        answer: "ARK",
        options: ["BRK", "SRK", "DRK", "ARK"]
    },
    {
        question: "What is my age?",
        answer: "24",
        options: ["25", "21", "16", "24"]
    },
    {
        question: "What is my location?",
        answer: "Clifton",
        options: ["Defence", "Jauhar", "Gulshan", "Clifton"]
    },
]



var questionCard = document.getElementById("questionCard");
var scoreCard = document.getElementById("scoreCard");
function showQuestion(e) {
    scoreCard.style.visibility = "hidden";
    //show question
    var questionBox = document.getElementById("question");
    questionBox.innerHTML = `<h2>${quiz[e].question}</h2>`;

    // show options
    var option = document.getElementsByClassName("options");

    console.log(option);
    for (var i = 0; i <= quiz.length; i++) {
        option[i].innerHTML = `<h4>${quiz[e].options[i]}</h4>`;
    }

}

var questionCount = 0;
var selectedOption = document.getElementsByClassName("options")
var score = 0;
var scoreCard = document.getElementById("scoreCard");
var totalScore = document.getElementById("score");

var quizQuestionCount = quiz.length;
function nextQuestion() {
    console.log(questionCount);
    //for score
    for (var i = 0; i < selectedOption.length; i++) {

        if (selectedOption[i].classList.contains("selected") && selectedOption[i].innerText === quiz[questionCount].answer) {
            score++;
        }
    }

    if (questionCount < 2) {
        questionCount++;
        showQuestion(questionCount);
        activeClass();
    } else {
        questionCard.style.visibility = "hidden";
        scoreCard.style.visibility = "visible";
    }
    totalScore.innerHTML = score;
}



function checkAnswer(e) {
    e.classList.add("selected");
}

function activeClass() {
    var option = document.getElementsByClassName("options");
    var isSelected = false;

    for (i = 0; i < option.length; i++) {

        if (option[i].classList.contains("selected")) {
            isSelected = true;
            option[i].classList.remove("selected");
        }
    }

    return isSelected;
}