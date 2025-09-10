// firebase-init.js
// ⚡ Se carga después de los SDKs en todas las páginas

// Inicializar solo si no existe ya
if (!firebase.apps.length) {
  // La config ya viene de /__/firebase/init.js (Firebase Hosting)
  // No necesitamos repetirla aquí
  console.log("✅ Firebase inicializado");
}

const auth = firebase.auth();
const db = firebase.firestore();

// Configurar persistencia
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => console.log("✅ Persistencia LOCAL habilitada"))
  .catch(err => console.error("❌ Error en persistencia:", err));

// Activar App Check en TODAS las páginas
const appCheck = firebase.appCheck();
appCheck.activate("6LcXGUoqAAAAAOXhmyIhiLPelg-D6DrPhnHI0JQd", true);

window.auth = auth;
window.db = db;

