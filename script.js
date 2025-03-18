const riddles = [
    { question: "Vuelo de noche, duermo en el día y nunca verás plumas en ala mía. ¿Quién soy?", answer: "murciélago" },
    { question: "Tengo agujas y no sé coser, tengo números y no sé leer. ¿Qué soy?", answer: "reloj" },
    { question: "Oro parece, plata no es, quien no lo adivine bien tonto es. ¿Qué es?", answer: "plátano" },
    { question: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?", answer: "pera" },
    { question: "Lana sube, lana baja. ¿Qué es?", answer: "oveja" }
];

let currentRiddle = {};
let score = 0;

function newRiddle() {
    const randomIndex = Math.floor(Math.random() * riddles.length);
    currentRiddle = riddles[randomIndex];
    document.getElementById("riddle").textContent = currentRiddle.question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    
    if (userAnswer === currentRiddle.answer) {
        document.getElementById("feedback").textContent = "✅ ¡Correcto!";
        score++;
    } else {
        document.getElementById("feedback").textContent = `❌ Incorrecto. La respuesta era: ${currentRiddle.answer}`;
    }

    document.getElementById("score").textContent = score;
}
