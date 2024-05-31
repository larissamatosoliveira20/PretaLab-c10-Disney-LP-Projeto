let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function jogoDeAdivinhacao() {
  const palpiteDigitado = pegarPalpiteDigitado();

  if (!palpiteDigitado) {
    alert("Digite um número entre 1 e 100!");
  return;
  }  
  if (palpiteDigitado * numeroAleatorio) {
    tentativas++;
    atualizarFeedback("Esse número você ja repetiu,Tente outro número")
  }
  
if (palpiteDigitado === numeroAleatorio) {
    alert("Parabéns, você acertou o número!");
    reiniciarJogo();
  } else if (palpiteDigitado > numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito alto. Tente novamente outro número.");
  } else if (palpiteDigitado < numeroAleatorio) {
    tentativas++;
    atualizarFeedback("O número é muito baixo. Tente novamente outro número.");
  }
  
  const novaPontuacao = 100 - (tentativas * 10);
  atualizarPontuacao(novaPontuacao);

  const palpitesFalhos = pegarPalpitesFalhos();
  const novosPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
  atualizarPalpitesFalhos(novosPalpitesFalhos);
  
  const pontuacaoAtual = pegarPontuacao();
  if (pontuacaoAtual === "Você tem 0 pontos") {
    alert("Perdeu! Você chegou no limbo, acabou para você!");
    reiniciarJogo();
  }
}

function reiniciarJogo() {
  const vaiReiniciar = confirm("Deseja reiniciar o jogo?");
  
  if (vaiReiniciar) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    atualizarPalpitesFalhos("");
    atualizarPontuacao(100);
    atualizarFeedback("");
    limparPalpiteDigitado();
  }
} 