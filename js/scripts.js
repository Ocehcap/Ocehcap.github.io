new Vue({
    el: '#app',
    data: {
      filtroTamanho: '',
      filtroMarca: '',
      filtroCor: '',
      trocas: [
        {
          id: 1,
          nome: 'Cristiano Ronaldo',
          perfil: './images/PERFILCR7.jpg',
          imagem: './images/IMG_4412.png',
          tamanho: '40',
          marca: 'Nike'
        },
        {
          id: 2,
          nome: 'Lionel Messi',
          perfil: './images/PERFILMESSI.jpg',
          imagem: './images/IMG_4412.png',
          tamanho: '42',
          marca: 'Adidas'
        },
        {
          id: 3,
          nome: 'Neymar Jr',
          perfil: './images/PERFILNEYMAR.jpg',
          imagem: './images/IMG_4412.png',
          tamanho: '38',
          marca: 'Puma'
        }
      ],
      trocasFiltradas: []
    },
    methods: {
      aplicarFiltros() {
        let trocasFiltradas = this.trocas;
  
        if (this.filtroTamanho !== '') {
          trocasFiltradas = trocasFiltradas.filter(troca => troca.tamanho === this.filtroTamanho);
        }
  
        if (this.filtroMarca !== '') {
          trocasFiltradas = trocasFiltradas.filter(troca => troca.marca === this.filtroMarca);
        }
  
        if (this.filtroCor !== '') {
          trocasFiltradas = trocasFiltradas.filter(troca => troca.cor === this.filtroCor);
        }
  
        this.trocasFiltradas = trocasFiltradas;
      }
    },
    created() {
      this.aplicarFiltros();
    }
  });
  