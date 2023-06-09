function removerItem() {
    localStorage.removeItem('currentUser');
    alert('Item removido do localStorage!');
    window.open('index.html', '_self'); 
}

// Verifica se há um usuário atualmente no localStorage
function verificarUsuarioAtual() {
    const currentUser = localStorage.getItem('currentUser');
    const userON = JSON.parse(currentUser);
    var logoutButton = document.getElementById('logoutButton');
    var iconPerf = document.getElementById('iconPerf');
    var PermAdmin = document.getElementById('PermAdmin');
    var PermAdmin1 = document.getElementById("PermAdmin1");
    var TradeNav = document.getElementById('TradeNav');
    var TradeFeed = document.getElementById('TradeFeed');
    
    if (currentUser && userON.email !== "pauloypacheco25@gmail.com") {
        logoutButton.style.display = 'block'; // Exibe o botão
        iconPerf.style.display ='block';
        PermAdmin.style.display = 'none';
        PermAdmin1.style.display = 'none';
    }else if(currentUser && userON.email === "pauloypacheco25@gmail.com"){
        logoutButton.style.display = 'block'; // Exibe o botão
        iconPerf.style.display ='block';
        PermAdmin.style.display = 'block';
        PermAdmin1.style.display = 'block';
        TradeNav.style.display = 'block';
        TradeFeed.style.display = 'block';
    }else{
        logoutButton.style.display = 'none'; // Esconde o botão
        iconPerf.style.display = 'none';
        PermAdmin.style.display = 'none';
        PermAdmin1.style.display = 'none';
        TradeNav.style.display = 'none';
        TradeFeed.style.display = 'none';
    }
}

// Chama a função para verificar o usuário atual ao carregar a página
window.onload = verificarUsuarioAtual();