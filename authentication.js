// Configura la aplicación de Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Configura la autenticación de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  