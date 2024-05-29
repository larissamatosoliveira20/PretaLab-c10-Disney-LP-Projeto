let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let palpitejaDigitado =[];
let palpiteDigitado = [];

function adivinhacao() {
 
  let palpite = parseInt(prompt("Adivinhe o número (entre 1 e 100):"));

  if (palpite < 1 || palpite > 100) {
      alert("Por favor, insira um número entre 1 e 100.");
      adivinhacao();
  } else if (palpitejaDigitado.includes(palpiteDigitado)) {
      alert("Número repetido. Tente novamente.");
      adivinhacao();
  } else {
      palpitejaDigitado.push(palpiteDigitado);

      if (palpiteDigitado === numeroAleatorio) {
          alert(`Parabéns! Você acertou o número em ${palpite.length} palpites.`);
      } else if (palpiteDigitado < numeroAleatorio) {
          alert("Tente um número maior.");
          adivinhacao();
      } else {
          alert("Tente um número menor.");
          adivinhacao();
      }
  }
}
    
