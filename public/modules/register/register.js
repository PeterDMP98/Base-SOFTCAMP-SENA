/*******************      Registro de Usuario ********************/
document.getElementById('registerForm').addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;

    /*valores de los inputs */
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const rol = document.getElementById("rol").value;
    const termsConditions = document.getElementById("terms-conditions").checked;
    
    /*validacion de contrseñas iguales*/

    if(password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    };

    if (!termsConditions) {
        alert("Debe aceptar los terminos y condiciones");
        return;
    };

    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({nombre, email, password, phone, address, rol })
        });
        
        const data = await response.json();

        if (response.ok) {
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            form.reset();
            window.location.href = "/index.html";
        } else {
            alert(data.message || "Error al registrar.");
        }

    } catch (error) {
        alert("Error de red o del servidor: " + error.message);
    };

});


