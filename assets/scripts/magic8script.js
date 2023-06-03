var eightBallImg = document.getElementById("eightball");
var containerArea = document.getElementById("container");


function generateFortune () {
	// console.log("Hello");


	var magic8BallAnswers = [
		"It is certain.",
		"It is decidedly so.",
		"Without a doubt.",
		"Definitely yes.",
		"You may rely on it.",
		"As I see it, yes.",
		"Most likely.",
		"Outlook good.",
		"Yes.",
		"Signs point to yes.",
		"Reply hazy try again.",
		"Ask again later.",
		"Better not tell you now.",
		"Cannot predict now.",
		"Concentrate and ask again.",
		"Don't count on it.",
		"My reply is no.",
		"My sources say no.",
		"Outlook not so good.",
		"Very doubtful."
	]
	eightBallImg.classList.add("animate__animated");
	eightBallImg.classList.add("animate__shakeX");

	// console.log(typeof(magic8BallAnswers)); //object
	// console.log(magic8BallAnswers[5]); // logs an answer as expected
	// console.log(magic8BallAnswers.length); // 20 items in array above
	// console.log(Math.floor(Math.random() * 20)); //generates random number between 0-20
	// console.log(magic8BallAnswers[0]); // confirms array starts at 0

	eightBallImg.addEventListener('animationend', (event) => {
		event.stopPropagation();
		eightBallImg.classList.remove("animate__animated");
		eightBallImg.classList.remove("animate__shakeX");

});

	//clear text area first
	containerArea.innerHTML = "";

	//create text element
	var fortuneTextEl = document.createElement("p");
	//console.log(magic8BallAnswers[Math.floor(Math.random() * 20)]);
	//console.log(typeof(magic8BallAnswers[Math.floor(Math.random() * 20)]));
	fortuneTextEl.innerText = magic8BallAnswers[Math.floor(Math.random() * 20)];
	containerArea.appendChild(fortuneTextEl);
}

eightBallImg.addEventListener('click', generateFortune); 
// console.log("Howdy!");



