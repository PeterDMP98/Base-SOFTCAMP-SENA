/*******************      Registro de Usuario ********************/
document.getElementById('registerForm').addEventListener("submit", async (e) => {
    e.preventDefault();

    /*valores de los inputs */
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const rol = document.getElementById("rol").value;
    const termsConditions = document.getElementById("terms-conditions").value;
    
    /*validacion de contrseñas iguales*/

    if(password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    };

    if (!termsConditions) {
        alert("Debe aceptar los terminos y condiciones");
        return;
    }

    const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({nombre, email, password, phone, address, rol })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.")
        window.location.href = "/index.html";
    } else{
        alert(data.message || "Error al registrar.");
    }
})


