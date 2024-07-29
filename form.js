
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtiene los datos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crea un objeto con los datos del formulario
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Envía los datos utilizando fetch
    fetch('https://tu-servidor.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Maneja la respuesta del servidor
        console.log('Success:', data);
        alert('Formulario enviado con éxito');
    })
    .catch((error) => {
        // Maneja los errores
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario');
    });
});

