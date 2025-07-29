document.getElementById('recuperarForm').addEventListener('submit',  async (e) => {
    e.preventDefault();

    const form = e.target;

    const email = document.getElementById('email').values.trim();

    if (!email) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    try {
        const response = await fetch('/api/recovery_password', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify({email})
        });

        const data = await response.json();

        alert("Hemos enviado un enlace de recuperación a tu correo.");
        form.reset();

    } catch (error) {
        console.error("Error al enviar la solicitud:", error);
        alert("Hubo un error al enviar la solicitud. Inténtalo más tarde.");
    }

});