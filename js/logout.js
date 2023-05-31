function removerItem() {
    localStorage.removeItem('currentUser');
    alert('Item removido do localStorage!');
    location.reload(); // Recarrega a página
}

// Verifica se há um usuário atualmente no localStorage
function verificarUsuarioAtual() {
    var currentUser = localStorage.getItem('currentUser');
    var logoutButton = document.getElementById('logoutButton');
    var iconPerf = document.getElementById('iconPerf');
    
    if (currentUser) {
        logoutButton.style.display = 'block'; // Exibe o botão
        iconPerf.style.display ='block';
    } else {
        logoutButton.style.display = 'none'; // Esconde o botão
        iconPerf.style.display = 'none';
    }
}

// Chama a função para verificar o usuário atual ao carregar a página
window.onload = verificarUsuarioAtual;