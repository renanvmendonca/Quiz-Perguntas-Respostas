
const quizForm = document.getElementById("quiz-form");


quizForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const score = calculateScore(); 
    displayResult(score); 
});


function calculateScore() {
    let score = 0;

   
    const q1Answer = document.querySelector('input[name="q1"]:checked');
    const q1Feedback = document.getElementById("q1-feedback");
    if (q1Answer) {
        if (q1Answer.value === "c") {
            score++;
            q1Feedback.style.color = "green";
            q1Feedback.textContent = "Resposta correta!";
        } else {
            q1Feedback.style.color = "red";
            q1Feedback.textContent = "Resposta incorreta.";
        }
    }

    
    const q2Answer = document.querySelector('input[name="q2"]:checked');
    const q2Feedback = document.getElementById("q2-feedback");
    if (q2Answer) {
        if (q2Answer.value === "a") {
            score++;
            q2Feedback.style.color = "green";
            q2Feedback.textContent = "Resposta correta!";
        } else {
            q2Feedback.style.color = "red";
            q2Feedback.textContent = "Resposta incorreta.";
        }
    }

  
    const q3Answer = document.querySelector('input[name="q3"]:checked');
    const q3Feedback = document.getElementById("q3-feedback");
    if (q3Answer) {
        if (q3Answer.value === "c") {
            score++;
            q3Feedback.style.color = "green";
            q3Feedback.textContent = "Resposta correta!";
        } else {
            q3Feedback.style.color = "red";
            q3Feedback.textContent = "Resposta incorreta.";
        }
    }

    
    const q4Answer = document.querySelector('input[name="q4"]:checked');
    const q4Feedback = document.getElementById("q4-feedback");
    if (q4Answer) {
        if (q4Answer.value === "a") {
            score++;
            q4Feedback.style.color = "green";
            q4Feedback.textContent = "Resposta correta!";
        } else {
            q4Feedback.style.color = "red";
            q4Feedback.textContent = "Resposta incorreta.";
        }
    }

    
    const q5Answer = document.querySelector('input[name="q5"]:checked');
    const q5Feedback = document.getElementById("q5-feedback");
    if (q5Answer) {
        if (q5Answer.value === "b") {
            score++;
            q5Feedback.style.color = "green";
            q5Feedback.textContent = "Resposta correta!";
        } else {
            q5Feedback.style.color = "red";
            q5Feedback.textContent = "Resposta incorreta.";
        }
    }

    return score;
}


function displayResult(score) {
    const resultContainer = document.getElementById("result-container");
    const scoreValue = document.getElementById("score-value");
    scoreValue.textContent = score;

    resultContainer.style.display = "block"; 
}

