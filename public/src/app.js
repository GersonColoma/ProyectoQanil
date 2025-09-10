// Función para abrir/cerrar el panel lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Función para mostrar la sección seleccionada y ocultar las demás
function showSection(sectionId) {
    // Obtener todas las secciones
    const sections = document.querySelectorAll('.section');
    
    // Ocultar todas las secciones
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');

    // Cerrar el panel lateral si está abierto en pantallas pequeñas
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
}

