// Função para gerar número aleatório entre min e max
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Selecionando os elementos HTML
const sorteioButton = document.getElementById('sortear');
const numeroSorteadoDisplay = document.getElementById('numeroSorteado');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');

// Evento de clique no botão
sorteioButton.addEventListener('click', function() {
    // Obtendo os valores dos inputs
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // Verificando se os valores são válidos
    if (min >= max) {
        alert('O número mínimo deve ser menor que o número máximo.');
    } else {
        // Gerando o número sorteado
        const numeroSorteado = gerarNumeroAleatorio(min, max);
        
        // Exibindo o resultado
        numeroSorteadoDisplay.textContent = `Número Sorteado: ${numeroSorteado}`;
    }
});
