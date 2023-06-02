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


},10);