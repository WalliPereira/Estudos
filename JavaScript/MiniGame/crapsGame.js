function lancarDados() {
    return Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
}

function jogoDeCraps() {
    console.log("Bem-vindo ao jogo de Craps!");

    let primeiraJogada = lancarDados();
    console.log(`Sua primeira jogada é: ${primeiraJogada}`);

    if (primeiraJogada === 7 || primeiraJogada === 11) {
        console.log("Você fez um 'natural'. Você ganhou!");
    } else if (primeiraJogada === 2 || primeiraJogada === 3 || primeiraJogada === 12) {
        console.log("Você fez 'craps'. Você perdeu!");
    } else {
        let ponto = primeiraJogada;
        console.log(`Você fez um ponto: ${ponto}. Continue jogando para tentar tirar o mesmo número novamente.`);

        while (true) {
            let jogada = lancarDados();
            console.log(`Sua jogada é: ${jogada}`);

            if (jogada === ponto) {
                console.log("Você tirou seu ponto novamente. Você ganhou!");
                break;
            } else if (jogada === 7) {
                console.log("Você tirou 7. Você perdeu!");
                break;
            }
        }
    }
}

jogoDeCraps();