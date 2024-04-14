/* --- VARIABLES --- */
  const choices = ['✊', '🤚', '✌️'];
  const player1 = document.getElementById('player-1');

  /* 1a. */
  const player2 = document.getElementById('player-2');

  /* 1b. */
  const resultArea = document.getElementById('result-area');

  /* 1c. */
  const playBtn = document.getElementById('play-btn');

  /* This will help check your results */
  console.log(player2, resultArea, playBtn);

/* ----------------------------------------------- */

/* --- FUNCIONES --- */

  const generateChoice = () => {
    let r = Math.floor(Math.random() * 3);
    return choices[r]
  };

  const insertHTML = (choice1, choice2, result) => {
    player1.innerHTML = choice1;
    player2.innerHTML = choice2;
    resultArea.innerHTML = result;
  };

  const decideWinner = (a, b) => {
    if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {

      /* 3a. */ return "Es un empate 🤨😐";

    } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {

      /* 3b. */ return "Marvin 1 gana👾!";

    } else {

      /* 3c. */ return "Marvin 2 gana!👾👾";

    }
  };

  const play = () => {
    let choice1 = generateChoice();
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2);

    insertHTML(choice1, choice2, result);
  };

/* ----------------------------------------------- */

/* --- EVENT LISTENERS --- */

  /* 2. */ playBtn.addEventListener('click', play);

/* ------------------------------- */
