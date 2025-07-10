// Som
const bells = new Audio('/Hotel-bell-ringing-Sounds-effect.wav');

// Elementos
const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');
const minuteDiv = document.querySelector('.minutes');

let myInterval;
let state = true;

// Função principal do timer
const appTimer = () => {
  const sessionAmount = Number.parseInt(session.textContent);

  if (state) {
    state = false;
    let totalSeconds = sessionAmount * 60;

    const updateSeconds = () => {
      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds / 60);
      let secondsLeft = totalSeconds % 60;

      minuteDiv.textContent = `${minutesLeft}`;
      secondDiv.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

      if (totalSeconds <= 0) {
        bells.play();
        clearInterval(myInterval);
        state = true; // Permite reiniciar depois que termina
      }
    };

    myInterval = setInterval(updateSeconds, 1000);
  } else {
    alert('Sessão já começou.');
  }
};

startBtn.addEventListener('click', appTimer);

/*reiniciar a contagem sem precisar esperar acabar*/
resetBtn.addEventListener('click', () =>{{
  clearInterval(myInterval);  //parar o tempo
  state = true; //permite que inicie
  minuteDiv.textContent = '25'; //reinicia os minutos
  secondDiv.textContent = '00'; //reinicia os segundos
}});

/*ícone de clicar*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className  += " responsive";
  } else {
    x.className = "topnav";
  }
}