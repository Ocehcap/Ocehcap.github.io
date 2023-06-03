new Vue({
    el: '#app', // Use uma ID diferente para a segunda instância do Vue
    data: {
        filtroPessoa: '',
        termoPesquisa: '',
        trocas: [],
        trocasPessoa: [], // Array para armazenar as trocas da pessoa
        trocasPessoaFiltro: []
    },
    methods: {
        aplicarFiltros() {
            let trocasPessoaFiltro = this.trocasPessoa;
            // Filtrar as trocas da pessoa atual
            console.log(trocasPessoaFiltro);
            if (this.termoPesquisa !== '') {
                const termoBusca = this.termoPesquisa.toLowerCase();
                trocasPessoaFiltro = trocasPessoaFiltro.filter(troca => troca.id.includes(termoBusca));
            }
            console.log(trocasPessoaFiltro);
            this.trocasPessoaFiltro = trocasPessoaFiltro;
        },
        AcceptTrade(index) {
            this.trocasPessoa[index].accept = true;

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
        },
        RefuseTrade(index) {
            const trocaAtualizada = this.trocasFiltradas[index];

            // Procurar a troca correspondente no array this.trocas
            const trocaIndex = this.trocas.findIndex(troca => troca.id === trocaAtualizada.id);

            if (trocaIndex !== -1) {
                // Remover a troca atualizada do array this.trocas
                this.trocas.splice(trocaIndex, 1);
            }

            // Armazenar as trocas atualizadas no localStorage
            localStorage.setItem('tradeList', JSON.stringify(this.trocas));
            window.location.reload();
        },
        getTrocasFromLocalStorage() {
            const tradeList = localStorage.getItem('tradeList');

            if (tradeList) {
                this.trocas = JSON.parse(tradeList);
                const storedUser = localStorage.getItem('currentUser');
                const userON = JSON.parse(storedUser);
                const idPessoa = userON.id; // Substitua pelo nome da pessoa atual
                this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userWants.user !== null);
                this.trocasPessoa = this.trocasPessoa.filter(troca => troca.userHas.user.id === idPessoa || troca.userWants.user.id === idPessoa);
                this.trocasPessoa = this.trocasPessoa.filter(troca => troca.accept === false);
            }
            console.log(this.trocasPessoa);
        }
    },
    created() {
        this.getTrocasFromLocalStorage();
        this.aplicarFiltros();
    }
});