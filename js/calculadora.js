const tela = document.getElementById('tela');

// Função para adicionar números e operadores na tela
function adicionar(valor) {
    tela.value += valor;
}

// Função para apagar apenas o último número (botão de deletar)
function apagar() {
    tela.value = tela.value.slice(0, -1);
}

// Função para limpar a tela totalmente (botão AC)
function limparTela() {
    tela.value = '';
}

// Função para fazer a conta
function calcular() {
    try {
        if (tela.value !== "") {
            // 1. Primeiro, fazemos a conta matemática e mostramos o resultado na tela
            tela.value = eval(tela.value);
            
            // 67 :D
            if (tela.value == "67") {
                window.alert("Parabéns, você farmou aura...");
            }
        }
    } catch (erro) {
        // Se a conta for inválida (ex: 2++2), dá erro(depois eu faço algo pra nn duplicar sinal)
        tela.value = 'Erro';
        setTimeout(() => {
            limparTela();
        }, 1500);
    }
}