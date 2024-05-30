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

        } else if (palpite < numeroAleatorio) {
            alert("Tente um número maior.");
        
        } else {
            alert("Tente um número menor.");
          
             let novaPontuacao = pontuacao - 10;
            pontuacao = novaPontuacao;

            const palpitesFalhos = pegarPalpitesFalhos();
            const novosPalpitesFalhos = palpitesFalhos + " " + palpite;
            atualizarPalpitesFalhos(novosPalpitesFalhos);
        
            const pontuacaoAtual = pegarPontuacao();
            if (pontuacaoAtual === "Você tem 0 pontos") {
                alert("Perdeu! Você chegou no limbo, acabou para você!");
                reiniciarJogo();
            return;
        }
    }
}
}
    function reiniciarJogo() {
const vaiReiniciar = confirm("Deseja reiniciar o jogo?");
if (vaiReiniciar) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    palpitesAnteriores = [];
    pontuacao = 100; // Reiniciar pontuação
    atualizarPontuacao(pontuacao);
    atualizarPalpitesFalhos("");
    atualizarFeedback("");
    limparPalpite();
}
}
