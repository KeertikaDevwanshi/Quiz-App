let questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyper Transfer Machine Language",
            "High Text Machine Language"
        ],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: 1
    },
    {
        question: "Which language is used for web interactivity?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    document.getElementById("option1").innerText =
        questions[currentQuestion].options[0];

    document.getElementById("option2").innerText =
        questions[currentQuestion].options[1];

    document.getElementById("option3").innerText =
        questions[currentQuestion].options[2];

    document.getElementById("option4").innerText =
        questions[currentQuestion].options[3];

    document.getElementById("option1").onclick = () => checkAnswer(0);
    document.getElementById("option2").onclick = () => checkAnswer(1);
    document.getElementById("option3").onclick = () => checkAnswer(2);
    document.getElementById("option4").onclick = () => checkAnswer(3);
}

function checkAnswer(selected) {
    if (selected === questions[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }

    document.getElementById("score").innerText =
        "Score: " + score;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Quiz Finished! Your Score = " + score);
    }
}

loadQuestion();