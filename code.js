const quotes = [
    'Cuando hayas eliminado lo imposible, lo que quede, por improbable que sea, debe ser la verdad.',
    'No hay nada más engañoso que un hecho evidente.',
    'A estas alturas debería saber que cuando un hecho parece oponerse a una larga serie de deducciones, invariablemente demuestra ser capaz de soportar alguna otra interpretación.',
    'Nunca hago excepciones. Una excepción contradice la regla.',
    'Lo que un hombre puede inventar otro puede descubrir.',
    'Nada aclara tanto un caso como explicárselo a otra persona.',
    'La educación nunca termina, Watson. Es una serie de lecciones, con la mayor para la última.',
    'Tienes un gran don para el silencio, Watson. Te hace bastante invaluable como compañero.',
    "Lo que hagas en este mundo no tiene importancia. La pregunta es ¿qué puedes hacer que la gente crea que has hecho?.",
    
];
let words = []
let wordIndex = 0;

let startTime = Date.now()

const quoteElement = document.getElementById("quote");
const messageElement = document.getElementById("mensaje");
const typedValueElement = document.getElementById("typed-value")

document.getElementById("start").addEventListener("click", () => {
    const quoteIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[quoteIndex]
    words = quote.split(" ");
    wordIndex = 0;
    const spanWords = words.map(function (word) { return `<span>${word} </span>` })
    quoteElement.innerHTML = spanWords.join("");
    quoteElement.childNodes[0].className = "highlight";
    messageElement.innerText = "";
    typedValueElement.value = "";
    typedValueElement.focus();
    startTime = new Date().getTime()
})
typedValueElement.addEventListener("input", () => {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && wordIndex === words.length - 1) {
        const elapsedTime = new Date().getTime() - startTime;
        const mensaje = `FELICIDADES! Terminaste in ${elapsedTime / 1000} segundos.`;
        messageElement.innerText = mensaje
    } else if (typedValue.endsWith(" ") && typedValue.trim() === currentWord) {
        typedValueElement.value = "";
        wordIndex++;
        for (const wordElement of quoteElement.childNodes) {
            wordElement.className = "";
        }
        quoteElement.childNodes[wordIndex].className = "highlight"
    } else if (currentWord.startsWith(typedValue)) {
        typedValueElement.className = "";
    } else {
        typedValueElement.className = 'error';
    }



})