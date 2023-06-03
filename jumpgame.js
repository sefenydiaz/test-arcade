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
        endgame();
    }


},10);

function endgame(){
    if(confirm("Would you like to play again?") === true){
        location.reload();
    }else{
        countDownEl.textContent = '';
    }
    
    
}

//Call functions
countTimer();