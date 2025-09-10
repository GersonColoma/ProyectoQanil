// index.js
(function () {
  if (!window.firebase) {
    console.error("❌ Firebase no está disponible en index");
    return;
  }

  const auth = firebase.auth();

  try {
    const appCheck = firebase.appCheck();
    appCheck.activate("6LcXGUoqAAAAAOXhmyIhiLPelg-D6DrPhnHI0JQd", true);
    console.log("✅ App Check activado en index");
  } catch (e) {
    console.warn("⚠ No se pudo activar App Check en index:", e);
  }

  auth.onAuthStateChanged((user) => {
    console.log("🔎 onAuthStateChanged(index):", user?.email || null);
    if (user) {
      console.log("✅ Usuario autenticado en index:", user.email);
      if (typeof registrarInteraccion === "function") {
        registrarInteraccion("visita_index", "El usuario abrió la página principal");
      }
    } else {
      console.warn("⚠ No hay usuario autenticado. Redirigiendo a login...");
      window.location.href = "login.html";
    }
  });
})();

