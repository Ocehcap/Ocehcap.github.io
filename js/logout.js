function removerItem() {
    localStorage.removeItem('nomeDoItem');
    alert('Item removido do localStorage!');
    location.reload(); // Recarrega a página
}