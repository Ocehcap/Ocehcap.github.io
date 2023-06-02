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

      this.trocasFiltradas = trocasFiltradas;
    },
    getTrocasFromLocalStorage() {
      const tradeList = localStorage.getItem('tradeList');

      if (tradeList) {
        this.trocas = JSON.parse(tradeList);
      }
    },
    AcceptTrade() {
      const storedUser = localStorage.getItem('currentUser');
      const userON = JSON.parse(storedUser);

      // Update the userWants object with the desired user information
      this.trocasFiltradas.userWants.user = {
        id: userON.id,
        name: userON.name,
        firstName: userON.firstName,
        lastName: userON.lastName,
        email: userON.email,
        emailVerified: userON.emailVerified,
        picture: userON.picture
      };
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
    this.aplicarFiltros();
  }
});



  