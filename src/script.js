let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesAnteriores = [];
let pontuacao = 100;

function jogoDeAdivinhacao() {
    let palpite = parseInt(prompt("Digite um número entre 1 e 100:"));

    if (palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
    } else if (palpitesAnteriores.includes(palpite)) {
        alert("Número repetido. Tente novamente.");
    } else {
        tentativas++;
        palpitesAnteriores.push(palpite);

        if (palpite === numeroAleatorio) {
            alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
            reiniciarJogo();
            return;
        } else if (palpite < numeroAleatorio) {
            alert("Tente um número maior.");
        } else {
            alert("Tente um número menor.");
        }

        // Subtrai 10 pontos para cada tentativa errada
        pontuacao -= 10;
        atualizarPontuacao(pontuacao);

        const palpitesFalhos = pegarPalpitesFalhos();
        const novosPalpitesFalhos = palpitesFalhos + " " + palpite;
        atualizarPalpitesFalhos(novosPalpitesFalhos);

        if (pontuacao <= 0) {
            alert("Perdeu! Você chegou no limbo, acabou para você!");
            reiniciarJogo();
        }
    }
}

function reiniciarJogo() {
    const vaiReiniciar = confirm("Deseja reiniciar o jogo?");
    if (vaiReiniciar) {
        numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        tentativas = 0;
        palpitesAnteriores = [];
        pontuacao = 100; // Reinicia a pontuação
        atualizarPontuacao(pontuacao);
        atualizarPalpitesFalhos("");
        atualizarFeedback("");
        limparPalpite();
    }
} 
