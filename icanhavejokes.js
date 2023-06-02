async function getJoke(){
    // const jokeId = Math.floor(Math.random() * 150); // Generate a random joke ID within the range 0-150
    const url = 'https://jokeapi-v2.p.rapidapi.com/joke/Programming?type=twopart&format=json&idRange=0-150&blacklistFlags=nsfw%2Cracist%2Csexist%2Cexplicit%2Cpolitical%2Creligious&safe-mode=true';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c80cf076fmsh16ee6c98767b11dp1197c9jsn1b984ba5f989',
		'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com'
	}
};
    // console.log(options)
    try {
      const response = await fetch(url, options);
    
        if (response.status === 429) {
            document.getElementById("dadjokecontainer").innerHTML = "";
            var outtaJokes = document.createElement("p");
            outtaJokes.id = 'noJoke';
            outtaJokes.innerText = "Smell ya later"
            document.getElementById("dadjokecontainer").appendChild(outtaJokes);
        }
        else {

          const result = await response.text();
            console.log(result);
          const jokesConvertedObj = JSON.parse(result);
	          console.log(jokesConvertedObj)

            document.getElementById("dadjokecontainer").innerHTML = "";
            
          var jokeElement = document.createElement("p");
            jokeElement.id = 'joke';
            
          var joke = jokesConvertedObj.setup;
            // jokeElement.innerText = joke[Math.floor(Math.random() * 150)];
            jokeElement.innerText = joke;
            document.getElementById("dadjokecontainer").appendChild(jokeElement);

            var deliveryEl = document.createElement("p");
	          var deli = jokesConvertedObj.delivery;
	          
            deliveryEl.innerText = deli;
	          deliveryEl.id = 'delivery';
	          document.getElementById("joke").appendChild(deliveryEl);

            
          var againButton = document.createElement("button");
      
            againButton.id = 'againbutton';
            againButton.innerText = "That wasn't funny...";
            document.getElementById("delivery").appendChild(againButton);
            
          document.getElementById("againbutton").addEventListener('click', async () => {
              await getJoke();
              document.getElementById("stanleyImage").style.display = "block";
        });

          var hilariousButton = document.createElement("button");
            hilariousButton.id = 'hilariousbutton';
            hilariousButton.innerText = "That's hilarious!";
            document.getElementById("delivery").appendChild(hilariousButton);
            
            document.getElementById("hilariousbutton").addEventListener('click', async () => {
                await getJoke();
                document.getElementById("michaelImage").style.display = "block";
            });
      
            
      makeStanley();
      makeMichael();
    }
  } catch (error) {
    console.error(error);
  }
// }

function makeStanley() {
  var imageContainer = document.createElement("div");
  imageContainer.id = 'image-container';

  var image = document.createElement("img");
  image.id = 'stanleyImage';
  image.src = 'https://media.tenor.com/QWkkkIMIEHUAAAAC/eyeroll-stanley.gif';
  image.alt = 'stanley';
  image.style.display = 'none';

  imageContainer.appendChild(stanleyImage);
  document.getElementById("dadjokecontainer").appendChild(imageContainer);
}
function makeMichael(){
  var image = document.createElement("img");
  image.id = 'michaelImage';
  image.src = 'https://media4.giphy.com/media/l0amJzVHIAfl7jMDos/giphy.gif?cid=ecf05e47tt3bylqkzxeq34fvydxbv09ansynntdm3rfk0j3x&ep=v1_gifs_search&rid=giphy.gif&ct=g';
  image.alt = 'michael';
  image.style.display = 'none';
  document.getElementById("dadjokecontainer").appendChild(image);
}

}
getJoke();



