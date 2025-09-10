// index.js
(function () {
  const auth = firebase.auth();

  // Mostrar "Cargando..." mientras Firebase valida la sesión
  document.body.innerHTML = "<h2>Cargando...</h2>";

  auth.onAuthStateChanged((user) => {
	console.log("👉 Estado de sesión detectado en index:", user);
    if (user) {
      console.log("✅ Usuario autenticado:", user.email);

      // Restaurar el contenido normal del index (el HTML ya está cargado)
      document.body.innerHTML = document.body.innerHTML;

      // Registrar la visita
      if (typeof registrarInteraccion === "function") {
        registrarInteraccion("visita_index", "El usuario abrió la página principal");
      }
    } else {
      console.warn("⚠ No hay usuario autenticado. Redirigiendo a login...");
      window.location.href = "login.html";
    }
  });
})();

