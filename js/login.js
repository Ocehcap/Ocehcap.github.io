function handleCredentialResponse(response) {
         const data = jwt_decode(response.credential)
         console.log(data)

         fullName.textContent = data.name
         sub.textContent = data.sub
         given_name.textContent = data.given_name
         family_name.textContent = data.family_name
         email.textContent = data.email
         verifiedEmail.textContent = data.email_verified
         picture.setAttribute("src", data.picture)
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

          google.accounts.id.prompt(); // also display the One Tap dialog
        }

