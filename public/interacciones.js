// interacciones.js
(function () {
  // 🔹 Asegurarnos que Firebase ya esté disponible
  if (!firebase || !firebase.auth || !firebase.firestore) {
    console.error("❌ Firebase no está inicializado correctamente");
    return;
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  /**
   * Registra una interacción en Firestore.
   * @param {string} eventType - Tipo de interacción (ej: "enviar_bitacora")
   * @param {string} description - Detalle opcional
   */
  function registrarInteraccion(eventType, description = '') {
    const user = auth.currentUser;

    if (!user) {
      console.warn("⚠ No hay usuario autenticado, no se registra interacción");
      return;
    }

    db.collection("interacciones")
      .add({
        userId: user.uid,
        email: user.email || null,
        eventType,
        description,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("✅ Interacción registrada:", eventType);
      })
      .catch((error) => {
        console.error("❌ Error al registrar interacción:", error);
      });
  }

  // 🔹 Exponer en el global para poder usarlo en cualquier página
  window.registrarInteraccion = registrarInteraccion;
})();

