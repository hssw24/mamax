document.addEventListener("DOMContentLoaded", function () {
    const question = document.getElementById("question");
    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.style.display = "grid";
    buttonsContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(80px, 1fr))";
    buttonsContainer.style.gap = "10px";
    buttonsContainer.style.justifyContent = "center";
    let correctAnswer = 0;

    function generateQuestion() {
        let number = Math.floor(Math.random() * 10) + 1;
        correctAnswer = number * 5;
        question.textContent = `${number} × 5 = ?`;
        generateAnswerButtons();
    }

    function generateAnswerButtons() {
        buttonsContainer.innerHTML = "";
        let answers = Array.from({ length: 10 }, (_, i) => (i + 1) * 5);
        answers.sort(() => Math.random() - 0.5);

        answers.forEach(answer => {
            let button = document.createElement("button");
            button.textContent = answer;
            button.classList.add("answer-button");
            button.style.padding = "10px";
            button.style.fontSize = "18px";
            button.style.cursor = "pointer";
            button.style.border = "1px solid #ccc";
            button.style.borderRadius = "5px";
            button.style.backgroundColor = "#f0f0f0";
            button.addEventListener("click", function () {
                if (answer === correctAnswer) {
                    alert("Richtig!");
                    generateQuestion();
                } else {
                    alert("Falsch, versuche es nochmal.");
                }
            });
            buttonsContainer.appendChild(button);
        });
    }

    generateQuestion();
});
