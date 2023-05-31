
async function getMusic() {
    
    const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f0f29904e6mshef2e6c564d6894dp1e667djsnc65327931468',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //console.log(result);
        var resultParsed = (JSON.parse(result));
        //to get to mp3
        //console.log(resultParsed.data[0].preview);
        var track = resultParsed.data[0].preview; 
        // console.log(track);
        // console.log(typeof(track));

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

var Audioelement = document.getElementById("myAudio");
console.log(Audioelement); //currently returns null bc items need to be placed
//need to make button
        Audioelement.play(); 
}

// console.log(track);

getMusic(); 

document.getElementById("playbutton").addEventListener('click', playMusic);
