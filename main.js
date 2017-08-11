
let buttons = document.querySelectorAll("button");
let lcdDisplay = document.getElementById("lcd");
let audio = document.getElementById("silas");

for (let i=0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", displayValue);
  }

  function displayValue(event){
    let x = event.target.value;
      if (x === "C") {
        lcdDisplay.innerHTML = "";
        audio.play();
      } else if (x === "=") {
        lcdDisplay.innerHTML = eval(lcdDisplay.innerHTML);
        audio.play();
      } else {
        lcdDisplay.innerHTML += x;
        audio.play();
      }
      }
