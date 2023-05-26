window.onload = function () {
  google.accounts.id.initialize({
    client_id: "886063558665-5gnbgl39631a73910h7ptn8mn3mt17gn.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"), {
      theme: "filled_black",
      size: "large",
      type: "standard",
      shape: "pill",
      text: "signin",
      locale: "en-US",
      logo_alignment: "left"
    }
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
};

function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  // Crie uma nova instância Vue
  const app = new Vue({
    el: '#listaLogin',
    data: {
      users: [] // Lista de usuários
    },
    mounted() {
      // Recupere a lista de usuários da localStorage
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        this.users = JSON.parse(storedUsers);
      }

      // Adicione o usuário à lista apenas se ainda não existir
      if (!this.users.some(user => user.email === data.email)) {
        this.users.push(data);

        // Salve a lista de usuários na localStorage
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    }
  });
}


