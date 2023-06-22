const words = [
	"pineapple",
	"mango",
	"orange",
	"peach",
	"grapefruit",
	"apple",
	"watermelon",
	"pear",
	"pomelo",
	"lemon",
];

const currentWord = document.querySelector('.word');

function getRandomWord() {

	const randomWord = Math.floor(Math.random() * words.length);
	const word = words[randomWord];
	const fragment = new DocumentFragment();

	for (let letter of word) {
			const letterContainer = document.createElement('span');
			letterContainer.textContent = letter;
			fragment.append(letterContainer);
	}
	currentWord.append(fragment);
}
getRandomWord();

let i = 0;

const checkSymbol = function(event) {
	const element = currentWord.querySelectorAll('span');
	const elementSymbol = Array.from(element);

	if (event.key == elementSymbol[i].textContent) {
			elementSymbol[i].classList.remove('w');
			elementSymbol[i].classList.add('c');
			i++;
	} else {
			elementSymbol[i].classList.remove('c');
			elementSymbol[i].classList.add('w');
	}
}

document.addEventListener('keydown', checkSymbol);