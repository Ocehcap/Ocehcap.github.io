function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  // Verificar se o usuário já existe no localStorage
  const users = localStorage.getItem('users');
  let userList = users ? JSON.parse(users) : [];

  const existingUser = userList.find(user => user.id === data.sub);
  if (!existingUser) {
    // Criar objeto do usuário com todas as informações necessárias
    const newUser = {
      id: data.sub,
      name: data.name,
      firstName: data.given_name,
      lastName: data.family_name,
      email: data.email,
      emailVerified: data.email_verified,
      picture: data.picture
    };

    // Adicionar o novo usuário à lista
    userList.push(newUser);

    // Armazenar a lista atualizada no localStorage
    localStorage.setItem('users', JSON.stringify(userList));

    console.log('Usuário adicionado à lista e armazenado no localStorage.');
  } else {
    console.log('Usuário já existente. Não foi adicionado novamente.');
  }
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "886063558665-5gnbgl39631a73910h7ptn8mn3mt17gn.apps.googleusercontent.com",
    callback: handleCredentialResponse
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
      logo_alignment: "left"
    }
  );

  google.accounts.id.prompt();
}



