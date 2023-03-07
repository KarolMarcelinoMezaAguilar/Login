// Agrega un evento de clic al botón de inicio de sesión de Google
const googleSigninButton = document.getElementById("google-signin-button");
googleSigninButton.addEventListener("click", () => {
  // Inicia sesión con Google
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // Accede al token de acceso de Google
      const credential = result.credential;
      const token = credential.accessToken;
      // Accede al usuario firmado
      const user = result.user;
      console.log(user);
      alert("Inició sesión con éxito");
    })
    .catch((error) => {
      // Maneja los errores
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert("Ocurrió un error al iniciar sesión");
    });
});
