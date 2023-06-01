
var coinElement = document.getElementById("coin");
var outputTextContainer = document.getElementById("outputtextcontainer");
//on click
//animate__flip
//and append textbox that says heads or tails 

function flipCoin () {


    //console.log("Flip coin function has run"); 
    coinElement.classList.add("animate__animated");
	coinElement.classList.add("animate__flip");

    coinElement.addEventListener('animationend', (event) => {
		event.stopPropagation();
		coinElement.classList.remove("animate__animated");
		coinElement.classList.remove("animate__shakeX");

//prepping random number 0 or 1 
//console.log(Math.floor(Math.random() * 2));
var headOrTails = Math.floor(Math.random() * 2);
//console.log(headOrTails);

if (headOrTails === 1) {
        //clear text area first
	outputTextContainer.innerHTML = "";
    document.getElementById("coin").src="cointailsresized.png";
    var resultTextEl = document.createElement("p");
    resultTextEl.innerText = "Tails"
    outputTextContainer.appendChild(resultTextEl);
}
else {
        //clear text area first
	outputTextContainer.innerHTML = "";
    document.getElementById("coin").src="coinresized.png";
    var resultTextEl = document.createElement("p");
    resultTextEl.innerText = "Heads"
    outputTextContainer.appendChild(resultTextEl);
}


});
}

//listen for click
coinElement.addEventListener('click', flipCoin); 