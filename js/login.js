const app = new Vue({
  el: '#ListaLogin',
  data: {
    userList: [], // Lista de usuários
  },
  methods: {
    handleCredentialResponse(response) {
      const data = jwt_decode(response.credential);
      console.log(data);

      // Verifica se o usuário já está armazenado
      if (!this.isUserStored(data.email)) {
        const newUser = {
          name: data.name,
          sub: data.sub,
          given_name: data.given_name,
          family_name: data.family_name,
          email: data.email,
          email_verified: data.email_verified,
          picture: data.picture,
        };
        this.addUser(newUser);
      }
    },
    // Verifica se o usuário já está armazenado no Local Storage
    isUserStored(email) {
      return this.userList.some((user) => user.email === email);
    },
    // Adiciona um novo usuário à lista e armazena no Local Storage
    addUser(user) {
      this.userList.push(user);
      localStorage.setItem('userList', JSON.stringify(this.userList));
    },
  },
  mounted() {
    // Recupera a lista de usuários do Local Storage
    const storedUserList = localStorage.getItem('userList');
    if (storedUserList) {
      this.userList = JSON.parse(storedUserList);
    }

    google.accounts.id.initialize({
      client_id: '886063558665-5gnbgl39631a73910h7ptn8mn3mt17gn.apps.googleusercontent.com',
      callback: this.handleCredentialResponse,
    });

    google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
      theme: 'filled_black',
      size: 'large',
      type: 'standard',
      shape: 'pill',
      text: 'signin',
      locale: 'en-US',
      logo_alignment: 'left',
    });

    google.accounts.id.prompt(); // também exibe o diálogo One Tap
  },
});



