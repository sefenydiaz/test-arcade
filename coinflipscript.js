
var coinElement = document.getElementById("coin");
//on click
//animate__flip
//and append textbox that says heads or tails 

function flipCoin () {
    //console.log("Flip coin function has run"); 
    coinElement.classList.add("animate__animated");
	coinElement.classList.add("animate__flip");
}

//listen for click
coinElement.addEventListener('click', flipCoin); 