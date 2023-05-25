var ListaUserApp = new Vue({
    data: {
      userList: [] // Lista de usuários
    },
    methods: {
      salvarUsuario: function(userData) {
        this.userList.push(userData); // Adicionar o usuário à lista de usuários
        console.log('Usuário salvo:', userData);
        // Aqui você pode realizar qualquer ação adicional, como enviar os dados para o servidor
      }
    }
  });