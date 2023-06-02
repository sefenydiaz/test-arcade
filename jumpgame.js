var user = document.getElementById('player');
var block = document.getElementById('object');

function jump(){
    user.classList.add('animate');
    setTimeout(function (){
        user.classList.remove('animate')
    },480)
};