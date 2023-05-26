function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  // Verificar se o usuário já existe na lista
  const userList = getUserListFromLocalStorage();
  if (!userList.includes(data.email)) {
    // Adicionar o usuário à lista
    userList.push(data.email);
    // Armazenar a lista atualizada no localStorage
    setUserListToLocalStorage(userList);
  }
}

function getUserListFromLocalStorage() {
  const userListJson = localStorage.getItem('userList');
  if (userListJson) {
    return JSON.parse(userListJson);
  } else {
    return [];
  }
}

function setUserListToLocalStorage(userList) {
  const userListJson = JSON.stringify(userList);
  localStorage.setItem('userList', userListJson);
}

window.onload = function() {
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
    } // customization attributes
  );

  google.accounts.id.prompt(); // also display the One Tap dialog
}


