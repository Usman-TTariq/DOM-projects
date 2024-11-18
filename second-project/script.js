const jokesDiv = document.querySelector(".jokesDiv");
const generatorBtn = document.querySelector(".jokesGeneratorBtn");

const url = "https://icanhazdadjoke.com/";
// let timer_on = 10000;
// let interval;

function startInterval() {
  interval = setInterval(generateJokes, timer_on);
}

async function generateJokes(){
    generatorBtn.setAttribute("disabled", "disabled");
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    console.log("%cresponse from api: ", "color: blue; font-weight: bold;", response);
    const jokes = await response.json();
    console.log("%cAll jokes: ",  "color: green; font-weight: bold;", jokes);
    jokesDiv.innerHTML = jokes.joke;
  } catch (error) {
    console.log("Error: ", error);
    jokesDiv.innerHTML = "Error getting jokes";
  }
  finally{
    generatorBtn.removeAttribute("disabled");
  }
};

generateJokes();
// startInterval();


generatorBtn.addEventListener("click", function () {
    generateJokes();
    // clearInterval(interval)
    // startInterval()
  
  });
