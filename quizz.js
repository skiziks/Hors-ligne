const quizData = [
    {
        question: "Environ la moitié des jeunes de 16 à 25 ans passent plus de 2h par jour sur les réseaux sociaux.",
        correctAnswer: true,
        explanation: "Selon une étude du 30 novembre 2021 sur 3838 jeunes, 52% d'entre eux passeraient plus de 2h sur les réseaux par jour. Si toi aussi tu passes plus de 2h par jour sur les réseaux, nous t'invitons à télécharger l'application 'Onesec' qui va t'aider à contrôler ton temps d'écran."
    },
    {
        question: "En moyenne, une personne passe 1/4 de son temps de vie en ligne.",
        correctAnswer: false,
        explanation: "Ce n'est pas 1/4 mais plutôt 1/3 de notre temps de vie qui sera passé sur un écran. Des études montrent que pour une petite partie des jeunes, le temps passé sur un écran est supérieur à leur temps de sommeil."
    },
    {
        question: "Les réseaux sociaux sont une source d'anxiété sociale et de perte de concentration.",
        correctAnswer: true,
        explanation: "Des études montrent que les réseaux sociaux sont une source d'anxiété sociale à cause du besoin de satisfaire son public que l'on peut ressentir. Pour ce qu'il en est de la perte de concentration, elle existe à cause des notifications qui sont extrêmement distrayantes. Si tu veux être pleinement concentré dans ton travail, nous te recommendons de désactiver les notifications de tes réseaux."
    },
    {
        question: "3/4 des français déclarent utiliser les réseaux sociaux.",
        correctAnswer: true,
        explanation: "En effet c'est 75,9% des français qui utilisent les réseaux sociaux en France. Les réseaux sociaux ne se résument pas seulement à Facebook, Youtube, Instagram, TikTok et Twitter. LinkedIn aussi est un réseau social même si il comporte une dimension professionnelle."
    },
    {
        question: "Le divertissement est la 1ère raison pour laquelle les français utilisent les réseaux sociaux.",
        correctAnswer: true,
        explanation: "Il y aurait 60% des français qui déclarent utiliser les réseaux sociaux pour se divertir principalement. N'oublie pas que les réseaux sociaux peuvent aussi te servir à t'informer même si tu dois rester vigilent face aux fake news."
    },
];

const quizDataFinish = [
    {
        expert: "Vous avez un très bon niveau de connaissances sur les réseaux sociaux. Continuez à vous informer sur les réseaux sociaux et leurs effets sur la santé mentale et surtout faites en part à votre entourage pour les sensibiliser sur le sujet.",
        avance: "Vous avez un bon niveau de connaissances sur les réseaux sociaux. Continuez à vous informer sur les réseaux sociaux et leurs effets sur la santé mentale et n'hésitez pas à en faire part à votre entourage.",
        intermediaire: "Vous avez un niveau de connaissances moyen sur les réseaux sociaux. Continuez à vous informer sur les réseaux sociaux et leurs effets sur la santé mentale.",
        debutant: "Vous avez un faible niveau de connaissances sur les réseaux sociaux. Continuez à vous informer sur les réseaux sociaux et leurs effets sur la santé mentale.",
        noob: "Vous avez un très faible niveau de connaissances sur les réseaux sociaux. Continuez à vous informer sur les réseaux sociaux et leurs effets sur la santé mentale."
    }
]

const questionElement = document.getElementById("question");
const trueBtn = document.getElementById("true-btn");
const falseBtn = document.getElementById("false-btn");
const explanationElement = document.getElementById("explanation");
const nextBtn = document.getElementById("next-btn");
nextBtn.style.backgroundColor = "#385281";
nextBtn.style.color = "white";
nextBtn.style.border = "none";
nextBtn.style.borderRadius = "20px";
nextBtn.style.padding = "10px 20px";

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    explanationElement.textContent = "";
    explanationElement.style.display = "none";
    trueBtn.classList.remove("correct", "incorrect");
    falseBtn.classList.remove("correct", "incorrect");
    nextBtn.disabled = true;
    nextBtn.classList.add("disabled");

    // Afficher le numéro de la question
    const questionNumberElement = document.getElementById("question-number");
    questionNumberElement.textContent = "Question " + (currentQuestionIndex + 1) + " sur " + quizData.length;
}


function checkAnswer(isTrue) {
    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (isTrue === correctAnswer) {
        score++;
        explanationElement.textContent = "Bonne réponse ! " + currentQuestion.explanation;
        if (isTrue) {
            trueBtn.classList.add("correct");
        } else {
            falseBtn.classList.add("correct");
        }
    } else {
        explanationElement.textContent = "Mauvaise réponse. " + currentQuestion.explanation;
        if (isTrue) {
            trueBtn.classList.add("incorrect");
            falseBtn.classList.remove("correct");
        } else {
            falseBtn.classList.add("incorrect");
            trueBtn.classList.remove("correct");
        }
    }

    explanationElement.style.display = "block";
    trueBtn.disabled = true;
    falseBtn.disabled = true;
    nextBtn.disabled = false;
    nextBtn.classList.remove("disabled"); 
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        trueBtn.disabled = false;
        falseBtn.disabled = false;
        nextBtn.disabled = true;
        nextBtn.classList.add("disabled"); 
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    questionElement.textContent = "Quiz terminé !";
    explanationElement.textContent = "Votre score : " + score + "/" + quizData.length;
    var result = score / quizData.length;
    switch (true) {
        case (result >= 1):
            explanationElement.textContent += "\n" + quizDataFinish[0].expert;
            break;
        case (result >= 0.75):
            explanationElement.textContent += "\n" + quizDataFinish[0].avance;
            break;
        case (result >= 0.5):
            explanationElement.textContent += "\n" + quizDataFinish[0].intermediaire;
            break;
        case (result >= 0.25):
            explanationElement.textContent += "\n" + quizDataFinish[0].debutant;
            break;
        default:
            explanationElement.textContent += "\n" + quizDataFinish[0].noob;
            break;
    }

    
    
    // if (score == quizData.length) {
    //     explanationElement.textContent += "\n" + quizDataFinish[0].expert;
    // }
    trueBtn.style.display = "none";
    falseBtn.style.display = "none";
    nextBtn.style.display = "none";
    explanationElement.style.display = "block";
}

trueBtn.addEventListener("click", function() {
    checkAnswer(true);
});

falseBtn.addEventListener("click", function() {
    checkAnswer(false);
});

nextBtn.addEventListener("click", nextQuestion);

loadQuestion();