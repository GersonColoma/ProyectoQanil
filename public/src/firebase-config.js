// Importa Firebase modular API
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuración de Firebase
const firebaseConfig = {

  apiKey: "AIzaSyDExIysAk3D-cdMaSKatJwAhPfAeTLd-nc",

  authDomain: "proyectoq-68c43.firebaseapp.com",

  projectId: "proyectoq-68c43",

  storageBucket: "proyectoq-68c43.appspot.com",

  messagingSenderId: "943912549434",

  appId: "1:943912549434:web:8571268d93ce7f20784903"

};


// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

