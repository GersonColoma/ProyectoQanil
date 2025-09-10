// public/scripts/bitacora.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('emocionForm');
  const lista = document.getElementById('listaRegistros');

  const obtenerRegistros = () => {
    return JSON.parse(localStorage.getItem('bitacoraEmocional') || '[]');
  };

  const guardarRegistro = (registro) => {
    const registros = obtenerRegistros();
    registros.unshift(registro);
    localStorage.setItem('bitacoraEmocional', JSON.stringify(registros));
  };

  const mostrarRegistros = () => {
    lista.innerHTML = '';
    const registros = obtenerRegistros();
    registros.slice(0, 5).forEach(({ emocion, comentario, fecha }) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${fecha}</strong>: ${emocion} ${comentario ? `– <em>${comentario}</em>` : ''}`;
      lista.appendChild(li);
    });
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emocion = document.getElementById('emocion').value;
    const comentario = document.getElementById('comentario').value.trim();
    const fecha = new Date().toLocaleString();

    if (!emocion) return;

    guardarRegistro({ emocion, comentario, fecha });
    form.reset();
    mostrarRegistros();
  });

  mostrarRegistros();
});

