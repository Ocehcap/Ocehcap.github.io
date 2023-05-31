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
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
    this.aplicarFiltros();
  }
});


new Vue({
  el: '#app2', // Use uma ID diferente para a segunda instância do Vue
  data: {
    filtroPessoa: '',
    trocas: [],
    trocasPessoa: [] // Array para armazenar as trocas da pessoa
  },
  methods: {
    getTrocasFromLocalStorage() {
      const tradeList = localStorage.getItem('tradeList');

      if (tradeList) {
        this.trocas = JSON.parse(tradeList);

        // Filtrar as trocas da pessoa atual
        const storedUser = localStorage.getItem('currentUser');
        if(storedUser){
        const userON = JSON.parse(storedUser);
        const idPessoa = userOn.id; // Substitua pelo nome da pessoa atual
        this.trocasPessoa = this.trocas.filter(troca => troca.userHas.user.id === idPessoa);
        }
        this.trocasPessoa = trocasPessoa;
      }
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
    this.aplicarFiltros();
  }
});



  