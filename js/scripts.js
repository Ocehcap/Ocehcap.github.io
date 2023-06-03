new Vue({
  el: '#app',
  data: {
    filtroTamanho: '',
    filtroCaixa: '',
    filtroCor: '',
    filtroEstado: '',
    filtroMarca: '',
    termoPesquisa: '',
    trocas: [],
    trocasFiltradas: []
  },
  methods: {
    aplicarFiltros() {
      let trocasFiltradas = this.trocas;
  
      if (this.filtroTamanho !== '') {
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.SizeoftheShoe === this.filtroTamanho);
      }
  
      if (this.filtroCaixa !== '') {
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.HasBox === this.filtroCaixa);
      }
  
      if (this.filtroEstado !== '') {
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.StateoftheShoe === this.filtroEstado);
      }
  
      if (this.termoPesquisa !== '') {
        const termoBusca = this.termoPesquisa.toLowerCase();
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.SelectedSneaker.toLowerCase().includes(termoBusca));
      }
  
      // Adicionar condição para filtrar trocas com troca.userWants.user vazio
      trocasFiltradas = trocasFiltradas.filter(troca => troca.userWants.user === null);
  
      this.trocasFiltradas = trocasFiltradas;
    },
    getTrocasFromLocalStorage() {
      const tradeList = localStorage.getItem('tradeList');

      if (tradeList) {
        this.trocas = JSON.parse(tradeList);
      }
    },
    AcceptTrade(index) {
      const storedUser = localStorage.getItem('currentUser');
      const userON = JSON.parse(storedUser);
    
      // Atualizar o objeto userWants com as informações do usuário desejado
      this.trocasFiltradas[index].userWants.user = {
        id: userON.id,
        name: userON.name,
        firstName: userON.firstName,
        lastName: userON.lastName,
        email: userON.email,
        emailVerified: userON.emailVerified,
        picture: userON.picture
      };
    
      const trocaAtualizada = this.trocasFiltradas[index];
    
      // Procurar a troca correspondente no array this.trocas
      const trocaIndex = this.trocas.findIndex(troca => troca.id === trocaAtualizada.id);
    
      if (trocaIndex !== -1) {
        // Substituir a troca antiga pela troca atualizada
        this.trocas.splice(trocaIndex, 1, trocaAtualizada);
      }
    
      // Armazenar as trocas atualizadas no localStorage
      localStorage.setItem('tradeList', JSON.stringify(this.trocas));
      window.location.reload();
    }    
  },
  created() {
    this.getTrocasFromLocalStorage();
    this.aplicarFiltros();
  }
});



  