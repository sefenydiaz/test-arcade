var user = document.getElementById('player');
var block = document.getElementById('object');
var countDownEl = document.getElementById('timer');

function countTimer() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
      countDownEl.textContent = "Get Ready to Click In: " + timeLeft;
      timeLeft--;

      if(timeLeft < 0){
        countDownEl.textContent = 'GO!';
        clearInterval(timeInterval);
      }
    },1000);
} 

console.log(countTimer);
   

//user jump on click
function jump(){
    if(user.classList != 'animate'){
        user.classList.add('animate');
    }
    
    setTimeout(function (){
        user.classList.remove('animate')
    },480)
};

//hit detection

var checkHit = setInterval(function(){
    var playerPosition = 
    parseInt(window.getComputedStyle(user).getPropertyValue('top'));
    
    var blockPosition = 
    parseInt(window.getComputedStyle(block).getPropertyValue('left'));

    if (blockPosition<30 && blockPosition>0 && playerPosition>=125){
        block.style.animation = 'none';
        
        // block.style.display = 'none';
        endGame();
    }


},10);

function endGame() {
    countDownEl.textContent = '';

    var imageElement = document.createElement('img');
    imageElement.src = "assets/images/youlose.gif";
    imageElement.id = 'sadMike';
    document.getElementById('gameLoser').appendChild(imageElement);
  
    
    
    
    
    // Create a "Try Again?" button element
    var buttonElement = document.createElement('button');
    buttonElement.innerText = 'Try Again?';
    buttonElement.addEventListener('click', function() {
      location.reload(); // Reload the page when the button is clicked
    });
    document.getElementById('gameLoser').appendChild(buttonElement);
  }

//Call functions
countTimer();

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});