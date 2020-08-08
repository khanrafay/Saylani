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

function showQuestion() {

    //show question
    var questionBox = document.getElementById("question");
    questionBox.innerHTML = quiz[0].question;

    // show answer


}

showQuestion();