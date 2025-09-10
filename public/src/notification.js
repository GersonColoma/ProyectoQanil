// Solicitar permisos de notificación
if ('Notification' in window && navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);

        if (Notification.permission === 'default' || Notification.permission === 'denied') {
            Notification.requestPermission().then(function(permission) {
                if (permission === 'granted') {
                    new Notification('Gracias por habilitar las notificaciones!');
                }
            });
        }
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

