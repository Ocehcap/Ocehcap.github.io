function removerItem() {
    localStorage.removeItem('currentUser');
    alert('Item removido do localStorage!');
    location.reload(); // Recarrega a página
}