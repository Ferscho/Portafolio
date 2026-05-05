(function() {
    // 1. Inicializa SOLO UNA VEZ con el objeto de configuración
    emailjs.init({
      publicKey: "MuyZwcvtLke0dsZJO",
      blockHeadless: true,
      storageProvider: window.localStorage 
    });
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validación básica
    if (name && email && message) {
        // Bloquear el botón de envío para evitar múltiples clics
        const btn = e.target.querySelector('button');
        if(btn) btn.disabled = true;

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_email: 'fschespkr@gmail.com'
        };
        
        emailjs.send('service_nx5vak6', 'template_n0rnxlc', templateParams)
            .then(function(response) {
                alert('Mensaje enviado exitosamente. Gracias por contactarme.');
                document.getElementById('contactForm').reset();
            })
            .catch(function(error) { // Usar .catch es más limpio
                alert('Error al enviar el mensaje. Inténtalo de nuevo.');
                console.error('Error detallado:', error);
            })
            .finally(() => {
                if(btn) btn.disabled = false; // Reactivar el botón
            });
    } else {
        alert('Por favor, completa todos los campos.');
    }
});