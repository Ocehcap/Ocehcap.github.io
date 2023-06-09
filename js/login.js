new Vue({
  el: '#login',
  data: {
    currentUser: null, // Variável para armazenar o usuário atualmente logado
  },
  mounted() {
    this.$nextTick(() => {
      // Verifica se há um usuário logado no LocalStorage
      const storedUser = localStorage.getItem('currentUser');
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        console.log('Usuário logado:', this.currentUser);
      } else {
        google.accounts.id.initialize({
          client_id: "886063558665-5gnbgl39631a73910h7ptn8mn3mt17gn.apps.googleusercontent.com",
          callback: this.handleCredentialResponse,
        });

        google.accounts.id.renderButton(
          document.getElementById("buttonDiv"),
          {
            theme: "filled_black",
            size: "large",
            type: "standard",
            shape: "pill",
            text: "signin",
            locale: "en-US",
            logo_alignment: "left",
          }
        );

        google.accounts.id.prompt();
      }
    });
  },
  methods: {
    handleCredentialResponse(response) {
      const data = jwt_decode(response.credential);
      console.log(data);

      const users = localStorage.getItem('users');
      let userList = users ? JSON.parse(users) : [];

      const existingUserIndex = userList.findIndex((user) => user.id === data.sub);
      if (existingUserIndex === -1) {
        const newUser = {
          id: data.sub,
          name: data.name,
          firstName: data.given_name,
          lastName: data.family_name,
          email: data.email,
          emailVerified: data.email_verified,
          picture: data.picture,
        };

        userList.push(newUser);

        localStorage.setItem('users', JSON.stringify(userList));
        this.currentUser = newUser;
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        console.log('Usuário adicionado à lista e armazenado no localStorage.');
      } else {
        this.currentUser = userList[existingUserIndex];
        localStorage.setItem('currentUser', JSON.stringify(userList[existingUserIndex]));

        console.log('Usuário já existente. Carregando informações do localStorage.');

        window.location.href = 'faq.html';
      }
    },
  },
});





