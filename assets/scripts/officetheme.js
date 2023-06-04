async function getMusic() {
    
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=theofficethemesong';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1c80cf076fmsh16ee6c98767b11dp1197c9jsn1b984ba5f989',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //console.log(result);
        var resultParsed = (JSON.parse(result));
        //to get to mp3
        // console.log(resultParsed.data[0]);
        var track = resultParsed.data[0].preview; 
        // console.log(track);
        // console.log(typeof(track));

        // console.log(resultParsed.data[0].artist.id);

        //need to create audio html element to play it
        //example:
        //         <audio id="myAudio">
        //   <source src="horse.ogg" type="audio/ogg">
        //   <source src="horse.mp3" type="audio/mpeg">
        //   Your browser does not support the audio element.
        // </audio>

        var mp3Audio = document.createElement("audio");
        mp3Audio.id = 'myAudio';
        //var sourceLink = document.createElement("source");
        mp3Audio.setAttribute("src", track);
        mp3Audio.setAttribute("type", "audio/mpeg");
        mp3Audio.setAttribute("preload", "auto");
        document.getElementById("audiobox").appendChild(mp3Audio);
        //sourceLink.id = 'sourceMP3'
        //document.getElementById("myAudio").appendChild(sourceLink);

    } catch (error) {
        console.error(error);
    }

}

function playMusic () {
// var Audioelement = document.getElementById("myAudio");
//console.log(Audioelement); //currently returns null bc items need to be placed
//need to make button
var Audioelement = document.getElementById("myAudio");
        Audioelement.play(); 
}

function pauseMusic () {
    //console.log(Audioelement); //currently returns null bc items need to be placed
    //need to make button
    var Audioelement = document.getElementById("myAudio");
        Audioelement.pause(); 
    }

// console.log(track);

getMusic(); 

document.getElementById("playbutton").addEventListener('click', playMusic);
document.getElementById("pausebutton").addEventListener('click', pauseMusic);
document.getElementById("downvolbutton").addEventListener('click', adjustVolumeDown);
document.getElementById("upvolbutton").addEventListener('click', adjustVolumeUp);

var volumeNumber = 1; 

function adjustVolumeDown() {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
    var Audioelement = document.getElementById("myAudio");
    var newVolumeNumber = volumeNumber - 0.1;
    if (newVolumeNumber <= 0) {
        newVolumeNumber === 0;
    }
    else {
    Audioelement.volume = newVolumeNumber;
    //console.log(Audioelement.volume);
    return volumeNumber = newVolumeNumber;
}
}

function adjustVolumeUp() {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume
    var Audioelement = document.getElementById("myAudio");
    var newVolumeNumber = volumeNumber + 0.1;

    if (newVolumeNumber >= 1) {
        newVolumeNumber === 1;
    }
    else {
    Audioelement.volume = newVolumeNumber;
    //console.log(Audioelement.volume);
    return volumeNumber = newVolumeNumber;
}
}