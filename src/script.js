let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpitesAnteriores = [];

function pegarPalpiteDigitado() {
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
          
    }
}

} 
