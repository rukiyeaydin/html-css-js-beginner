function playerChoice(choice) {
    const choices = ['taş', 'kağıt', 'makas'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
  
    const result = determineWinner(choice, computerChoice);
    displayResult(choice, computerChoice, result);
  }
  
  function determineWinner(player, computer) {
    if (player === computer) {
      return "Berabere!";
    } else if ((player === 'taş' && computer === 'makas') ||
               (player === 'kağıt' && computer === 'taş') ||
               (player === 'makas' && computer === 'kağıt')) {
      return "Sen Kazandın!";
    } else {
      return "Bilgisayar Kazandı!";
    }
  }
  
  function displayResult(playerChoice, computerChoice, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    Senin Seçimin: <span style="color: palevioletred">${playerChoice}</span><br>
    Bilgisayarın Seçimi: <span style="color: palevioletred">${computerChoice}</span><br>
    Sonuç: <span style="color: red">${result}</span>
  `;
  }
  