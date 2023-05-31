new Vue({
  el: '#app',
  data: {
    filtroTamanho: '',
    filtroMarca: '',
    filtroCor: '',
    trocas: [],
    trocasFiltradas: []
  },
  methods: {
    aplicarFiltros() {
      let trocasFiltradas = this.trocas;

      if (this.filtroTamanho !== '') {
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.SizeoftheShoe === this.filtroTamanho);
      }

      if (this.filtroMarca !== '') {
        trocasFiltradas = trocasFiltradas.filter(troca => troca.userHas.SelectedSneaker === this.filtroMarca);
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



  