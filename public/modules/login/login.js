/*login - index.hmtl */
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert('Inicio de sesión exitoso ✅')

      /*acceso segun el rol*/
      if (data.rol === 'campesino') {
        window.location.href = '/home_campesino.html';
      } else if (data.rol === 'comprador') {
        window.location.href = '/home_comprador.html';
      } else {
        alert(data.message || 'Credenciales inválidas');
      }
    }

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error de conexión con el servidor');
  }

});