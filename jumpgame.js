var user = document.getElementById('player');
var block = document.getElementById('object');


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

    if (blockPosition<20 && blockPosition>0 && playerPosition>=125){
        block.style.animation = 'none';
        block.style.display = 'none';
        alert('you lose!');
        endgame();
    }


},10);

function endgame(){
    location.reload()
}