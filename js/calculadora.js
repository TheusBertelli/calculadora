// Pegamos a tela (input) do HTML para poder modificá-la
const tela = document.getElementById('tela');

// Função para adicionar números e operadores na tela
function adicionar(valor) {
    tela.value += valor;
}

// Função para limpar a tela totalmente (botão AC)
function limparTela() {
    tela.value = '';
}

// Função para fazer a conta quando apertar o "="
function calcular() {
    try {
        // A função eval() lê uma string (ex: "2+2") e calcula o resultado em JavaScript
        // Se a conta for válida, ele mostra na tela.
        if (tela.value !== "") {
            tela.value = eval(tela.value);
        
        }
    } catch (erro) {
        // Se o usuário digitar algo absurdo (ex: 5++/*3), mostramos um erro
        tela.value = 'Erro';
        
        // Limpa o erro automaticamente após 1.5 segundos
        setTimeout(() => {
            limparTela();
        }, 1500);
    }
}