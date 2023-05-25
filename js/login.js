function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  // Enviar os dados do usuário para guardar.js
  ListaUserApp.salvarUsuario({
    fullName: data.name,
    sub: data.sub,
    given_name: data.given_name,
    family_name: data.family_name,
    email: data.email,
    verifiedEmail: data.email_verified,
    picture: data.picture
  });

  // Restante do código...
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id: "886063558665-5gnbgl39631a73910h7ptn8mn3mt17gn.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),{ 
      theme: "filled_black", 
      size: "large",
      type: "standard",
      shape: "pill",
      text: "signin",
      locale: "en-US",
      logo_alignment: "left"
    }  // customization attributes
  );

  google.accounts.id.prompt(); // também exibe o diálogo do One Tap
}

