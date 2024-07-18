function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

//ParseInt para ser do tipo inteiro e não string

let sorteados = [];
let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate); 

        while(sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate); 
        }
        
        sorteados.push(numero);
    }

 let resultado = document.getElementById('resultado');
 let label = resultado.querySelector('label');
 label.textContent = `Números sorteados: ${sorteados}`;

}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1)) + min;
}

