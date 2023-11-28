// Text to Morse code
morseCodeObj = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "_": "..--.-",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "/": "-..-.",
    "@": ".--.-.",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    " ": "/"
};

const mainDiv = document.querySelector('.main-box');
const messageInput = document.getElementById('message-input');
const translationBtn = document.querySelector('.translate-btn');
const messageOutput = document.querySelector('.translated-message');
const selectMenu = document.getElementById("translation-mode");

const encodeMessage = (message, messageCodeObj) => {
    let messageArr = message.toUpperCase().split("");
    return messageArr.map((key) => {
        return messageCodeObj[key] ? messageCodeObj[key] : key
    }).join(" ");
}

const decodeMessage = (message, messageCodeObj) => {
    const messageArr = message.split(" ");
    let decodeMessage = "";
    messageArr.map(word => {
        const letters = word.split(" ");
        letters.map(letter => {
            let char = Object.keys(messageCodeObj).find(key => messageCodeObj[key] === letter);
            if(char) {
                decodeMessage += char;
            }
        });
        decodeMessage += "";
    });
    return decodeMessage;
}

translationBtn.addEventListener('click', () => {
    let messageInputText = messageInput.value;
    let messageOutputText = "";
    if(messageInputText.value = "") return;
    if(messageInputText.includes(".")) {
        messageOutputText = decodeMessage(messageInputText, morseCodeObj);
        messageOutput.innerText = messageOutputText;
    } else {
        messageOutputText = encodeMessage(messageInputText, morseCodeObj);
        messageOutput.innerText = messageOutputText;
    }
});

