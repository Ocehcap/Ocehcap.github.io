new Vue({
  el: '#app1', // Use uma ID diferente para a segunda instância do Vue
  data: {
    userON: {}
  },
  methods: {
    getUserFromLocalStorage() {
      const storedUser = localStorage.getItem('currentUser');
      this.userON = JSON.parse(storedUser);
    }
  },
  created() {
    this.getUserFromLocalStorage();
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
        this.trocasPessoa = this.trocas;
        // Filtrar as trocas da pessoa atual
        const storedUser = localStorage.getItem('currentUser');
        const userON = JSON.parse(storedUser);
        const idPessoa = userON.id; // Substitua pelo nome da pessoa atual
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userHas.user.id === idPessoa);
      }
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
  }
});

new Vue({
  el: '#app3', // Use uma ID diferente para a segunda instância do Vue
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
        this.trocasPessoa = this.trocas;
        // Filtrar as trocas da pessoa atual
        const storedUser = localStorage.getItem('currentUser');
        const userON = JSON.parse(storedUser);
        const idPessoa = userON.id; // Substitua pelo nome da pessoa atual
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userWants.user !== null);
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userHas.user.id === idPessoa || troca.userWants.user.id === idPessoa);
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.accept === true);

      }
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
  }
});


new Vue({
  el: '#app4', // Use uma ID diferente para a segunda instância do Vue
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
        this.trocasPessoa = this.trocas;
        // Filtrar as trocas da pessoa atual
        const storedUser = localStorage.getItem('currentUser');
        const userON = JSON.parse(storedUser);
        const idPessoa = userON.id; // Substitua pelo nome da pessoa atual
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userWants.user !== null);
        this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userHas.user.id === idPessoa || troca.userWants.user.id === idPessoa);
      }
    }
  },
  created() {
    this.getTrocasFromLocalStorage();
  }
});