//variaveis
const X = "X";
const O = "O";
let quantidadeJogadas = 0;

let simbolo = X;

//array de objetos
let areasX = [];
let areasO = [];

//funcoes
function trocarSimbolo(){
    if(simbolo == X){ 
        simbolo = O;
        return marcarJogadorAtivo(simbolo);
    }
    simbolo = X;
    return marcarJogadorAtivo(simbolo); 
}

function salvarArea(simbolo, posicaoLinha, posicaoColuna){
    let area = { 
        simbolo:simbolo,
        linha: posicaoLinha,
        coluna: posicaoColuna
    };

    if(area.simbolo == X){
        return areasX.push(area);
    }
    return areasO.push(area);
}

function verificarLinhas(areasSimbolo,simbolo){
    let quantidadeLinha1 = areasSimbolo.filter(area => area.linha === 1);
    let quantidadeLinha2 = areasSimbolo.filter(area => area.linha === 2);
    let quantidadeLinha3 = areasSimbolo.filter(area => area.linha === 3);
    
    if(quantidadeLinha1.length === 3 || quantidadeLinha2.length === 3 || quantidadeLinha3.length === 3){
        exibirResultado( "JOGADOR VENCEDOR: " + simbolo);
    }
}

function verificarColunas(areasSimbolo,simbolo){
    let quantidadeColuna1 = areasSimbolo.filter(area => area.coluna === 1);
    let quantidadeColuna2 = areasSimbolo.filter(area => area.coluna === 2);
    let quantidadeColuna3 = areasSimbolo.filter(area => area.coluna === 3);
    
    if(quantidadeColuna1.length == 3 || quantidadeColuna2.length == 3 || quantidadeColuna3.length == 3){
       exibirResultado("JOGADOR VENCEDOR: " + simbolo);
    }
}

function verificarDiagonal(areasSimbolo,simbolo){
    let posicaoLinha1Coluna3 = areasSimbolo.find(area => area.linha === 1 && area.coluna == 3);
    let posicaoLinha2Coluna2 = areasSimbolo.find(area => area.linha === 2 && area.coluna == 2);
    let posicaoLinha3Coluna1 = areasSimbolo.find(area => area.linha === 3 && area.coluna == 1);
    let posicaoLinha1Coluna1 = areasSimbolo.find(area => area.linha === 1 && area.coluna == 1);
    let posicaoLinha3Coluna3 = areasSimbolo.find(area => area.linha === 3 && area.coluna == 3);

    if(posicaoLinha1Coluna3 !== undefined && posicaoLinha2Coluna2 !== undefined && posicaoLinha3Coluna1 !== undefined){
      return exibirResultado("JOGADOR VENCEDOR: " + simbolo);
    }

    if(posicaoLinha1Coluna1 !== undefined && posicaoLinha2Coluna2 !== undefined && posicaoLinha3Coluna3 !== undefined){
      return exibirResultado("JOGADOR VENCEDOR: " + simbolo);
    }
}

function verificarEmpate(){
    quantidadeJogadas ++;

    if(quantidadeJogadas === 9){
        exibirResultado("EMPATE");
    }
}

function VerificarVencedor(areasSimbolo,simbolo){
    verificarLinhas(areasSimbolo,simbolo);
    verificarColunas(areasSimbolo,simbolo);
    verificarDiagonal(areasSimbolo,simbolo);
}

function reiniciarJogo() {
    location. reload();
}

function selecionarArea(posicaoLinha, posicaoColuna) {
    desenharSimbolo(simbolo, posicaoLinha, posicaoColuna);
    salvarArea(simbolo, posicaoLinha, posicaoColuna);
    verificarEmpate();
    VerificarVencedor(areasX,simbolo);
    VerificarVencedor(areasO,simbolo);
    trocarSimbolo();
}