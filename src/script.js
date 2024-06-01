let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesFeitos = [];

function jogoDeAdivinhacao() {
  const palpiteDigitado = pegarPalpiteDigitado();

  if (!palpiteDigitado) {
    alert("Digite um número entre 1 e 100!");
    return;
  }

  if (palpitesFeitos.includes(palpiteDigitado)) {
    alert("Número repetido! Tente um número diferente.");
    marcarNumeroRepetido(palpiteDigitado);
    return;
  }

  palpitesFeitos.push(palpiteDigitado);

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
    palpitesFeitos = [];
    atualizarPalpitesFalhos("");
    atualizarPontuacao(100);
    atualizarFeedback("");
    limparPalpiteDigitado();
  }
}
