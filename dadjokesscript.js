async function getDadJokes () {

const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
const options = {
	method: 'GET',
	headers: {
		//'X-RapidAPI-Key': 'f0f29904e6mshef2e6c564d6894dp1e667djsnc65327931468', L's API Key
		// 'X-RapidAPI-Key': '1c80cf076fmsh16ee6c98767b11dp1197c9jsn1b984ba5f989', // T's API KEY
		// 'X-RapidAPI-Key': 'bfc1725a7amshd77ff2ba08b5859p168d19jsn8a', //Sef's API KEY
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
	console.log(options)
try {

	

	const response = await fetch(url, options);

	if (response.status === 429) {
		// console.log("I'm tired, come back later")
		document.getElementById("dadjokecontainer").innerHTML = "";
		//CREATE BUILD PLACE
		var tiredElement = document.createElement("p");
		tiredElement.id = 'tired';
		tiredElement.innerText = "I'm tired, come back later."
		document.getElementById("dadjokecontainer").appendChild(tiredElement);
	}

	else {

	const result = await response.text();
	// console.log(result);
	// console.log(typeof(result));
	const jokesConvertedObj = JSON.parse(result);
	console.log(jokesConvertedObj);
	// console.log(jokesConvertedObj.body[0].setup);
	// console.log(jokesConvertedObj.body[0].punchline);

	//CREATE BUILD PLACE
	//wipe box clean if there is a joke in it
	document.getElementById("dadjokecontainer").innerHTML = "";

	var jokeElement = document.createElement("p");
	jokeElement.id = 'joke';
	var joke = jokesConvertedObj.body[0].setup; 
	//console.log(joke);
	jokeElement.innerText = joke;
	document.getElementById("dadjokecontainer").appendChild(jokeElement);

	var punchlineElement = document.createElement("p");
	var punchline = jokesConvertedObj.body[0].punchline
	punchlineElement.innerText = punchline;
	punchlineElement.id = 'punchline';
	document.getElementById("joke").appendChild(punchlineElement);

	//<button type="button">That wasn't funny...</button>
	var againButton = document.createElement("button");
      againButton.id = 'againbutton';
      againButton.innerText = "That wasn't funny...";
      document.getElementById("punchline").appendChild(againButton);
      document.getElementById("againbutton").addEventListener('click', async () => {
        await getDadJokes();
        document.getElementById("jokeImage").style.display = "block";
      });
      makeStanley();
    }
  } catch (error) {
    console.error(error);
  }
// }

function makeStanley() {
  var image = document.createElement("img");
  image.id = 'jokeImage';
  image.src = 'https://media.tenor.com/QWkkkIMIEHUAAAAC/eyeroll-stanley.gif';
  image.alt = 'stanley';
  image.style.display = 'none';
  document.getElementById("dadjokecontainer").appendChild(image);
}
}
getDadJokes()