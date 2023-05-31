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
          const userON = JSON.parse(storedUser);
          const idPessoa = userON.id; // Substitua pelo nome da pessoa atual
          this.trocasPessoa = this.trocas.filter(troca => troca.userHas.user.id === idPessoa);
        }
      }
    },
    created() {
      this.getTrocasFromLocalStorage();
    }
  });