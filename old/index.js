// index.js
(function () {
  // Escuchar el estado de autenticación
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("✅ Usuario autenticado:", user.email);

      // Ejemplo: registrar la visita al index
      if (typeof registrarInteraccion === "function") {
        registrarInteraccion("visita_index", "El usuario abrió la página principal");
      }
    } else {
      console.warn("⚠ No hay usuario autenticado. Redirigiendo a login...");
      window.location.href = "login.html";
    }
  });
})();

