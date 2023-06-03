var dadJokePageClicks = 0;
var magic8PageClicks = 0;
var jumpGamePageClicks = 0 
var pongGamePageClicks = 0;


function addClickMagic8() {
    magic8PageClicks = magic8PageClicks + 1;
    localStorage.setItem("magic8PageClicks", magic8PageClicks);
    // console.log(magic8PageClicks)
}

function addClickDadJokes() {
    dadJokePageClicks = dadJokePageClicks + 1;
    localStorage.setItem("dadJokePageClicks", dadJokePageClicks);
}

function addClickJumpGame() {
    jumpGamePageClicks = jumpGamePageClicks + 1;
    localStorage.setItem("jumpGamePageClicks", jumpGamePageClicks);
}

function addClickPongGame() {
    pongGamePageClicks = pongGamePageClicks + 1;
    localStorage.setItem("pongGamePageClicks", pongGamePageClicks);
}

function getFavGame() {
    var magic8Likes = localStorage.getItem("magic8PageClicks");
    var dadJokeLikes = localStorage.getItem("dadJokePageClicks");
    var jumpGameLikes = localStorage.getItem("jumpGamePageClicks");
    var pongGameLikes = localStorage.getItem("pongGamePageClicks"); 
    
    // console.log(magic8Likes);
    // console.log(dadJokeLikes);
    // console.log(jumpGameLikes);
    // console.log(pongGameLikes);
    // console.log(Math.max(...likes)); 

    var likes = {magic8: magic8Likes, dadJokes: dadJokeLikes, jumpGame: jumpGameLikes, pongGame: pongGameLikes};
    // console.log(likes);

    //thank you to this stack overflow page for helping to figure out how to get max value from object https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object

    var max = Math.max.apply(null,Object.keys(likes).map(function(x){ return likes[x] }));
    var faveGame = (Object.keys(likes).filter(function(x){ return likes[x] == max; })[0]);
    console.log(typeof(faveGame));

    if (typeof(faveGame) == 'undefined') {
        return document.getElementById("favgame").innerText = "Your favorite game is not yet determined!";
    }

    document.getElementById("favgame").innerText = "Your favorite game is " + faveGame + "!";

}





//add event listener, on click add to variable 
document.getElementById("magic8").addEventListener('click', addClickMagic8);
document.getElementById("dadjokes").addEventListener('click', addClickDadJokes);
document.getElementById("jumpgame").addEventListener('click', addClickJumpGame);
document.getElementById("ponggame").addEventListener('click', addClickPongGame);


//get fav game
getFavGame()