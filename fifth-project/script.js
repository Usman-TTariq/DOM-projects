const textAreaInput = document.querySelector("#textAreaInput");
const morseAreaInput = document.querySelector("#morseAreaInput");
const textClipboard = document.querySelector("#textClipboard");
const morseClipboard = document.querySelector("#morseClipboard");
const morseMainChart = document.getElementById("morseMainChart");
const accordions = document.querySelectorAll(".accordion-label");

// morse code key vales
const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const reversingFunction = (keys, values) => {
    let obj = {};
    for(let i = 0; i < keys.length; i++){
        obj[values[i]] = keys[i];
    }
    return obj;
}

const morseKeys = Object.keys(MORSE_CODE);
const morseValues = Object.values(MORSE_CODE);
const reverseMorseCode = reversingFunction(morseKeys, morseValues);
console.log("--reverse object---: ", reverseMorseCode);

//check validation for both textInputArea and MorseInputArea
const checkInputValidation = (input, inputArea) => {
    inputArea.value = inputArea.value.replace(input, "");
  
    if (inputArea.value == morseAreaInput.value) {
      if (input === "") {
        console.log("it's space");
      } else {
        inputArea.style.borderColor = "red";
        setTimeout(() => {
          inputArea.style.borderColor = "#3273dc";
        }, 400);
      }
    } else {
      inputArea.style.borderColor = "red";
      setTimeout(() => {
        inputArea.style.borderColor = "#3273dc";
      }, 400);
    }
  };
