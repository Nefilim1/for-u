const compliments = [
    "В этот прекрасный день 8 марта хочу пожелать тебе столько счастья, сколько звёзд на небе ✨",
    "Ты - самая прекрасная женщина на свете, и я счастлив, что ты есть в моей жизни 🌟",
    "Пусть этот день будет наполнен радостью, любовью и самыми приятными сюрпризами 💝",
    "Твоя улыбка делает этот мир ярче и прекраснее 🌸",
    "Спасибо тебе за то, что ты есть, за твою доброту и нежность 💖",
    "Пусть каждый твой день будет таким же прекрасным, как ты сама 🌺",
    "Ты - источник вдохновения и радости в моей жизни 💫",
    "Желаю тебе всегда оставаться такой же прекрасной и счастливой 🌷",
    "Ты - самое ценное, что есть в моей жизни 💕",
    "Пусть все твои мечты сбываются, а каждый день приносит радость 🌹"
];

const messageElement = document.getElementById('message');
const generateButton = document.getElementById('generateBtn');

function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    messageElement.textContent = compliments[randomIndex];
    
    // Добавляем анимацию появления
    messageElement.style.opacity = '0';
    setTimeout(() => {
        messageElement.style.opacity = '1';
    }, 100);
}

generateButton.addEventListener('click', generateCompliment);

// Добавляем плавное появление текста
messageElement.style.transition = 'opacity 0.3s ease-in-out'; 