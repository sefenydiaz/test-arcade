var user = document.getElementById('player');
var block = document.getElementById('object');

function jump(){
    if(user.classList != 'animate'){
        user.classList.add('animate');
    }
    
    setTimeout(function (){
        user.classList.remove('animate')
    },480)
};