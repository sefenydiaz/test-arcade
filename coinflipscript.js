
var coinElement = document.getElementById("coin");
var outputTextContainer = document.getElementById("outputtextcontainer");
//on click
//animate__flip
//and append textbox that says heads or tails 

function flipCoin () {

    //clear text area first
	outputTextContainer.innerHTML = "";
    //console.log("Flip coin function has run"); 
    coinElement.classList.add("animate__animated");
	coinElement.classList.add("animate__flip");

    coinElement.addEventListener('animationend', (event) => {
		event.stopPropagation();
		coinElement.classList.remove("animate__animated");
		coinElement.classList.remove("animate__shakeX");

});
}

//listen for click
coinElement.addEventListener('click', flipCoin); 