const nombre = document.querySelector(".bienvenida-name")
const btn_cerrar_sesion = document.querySelector(".cerrar-session_btn");

if (window.localStorage.getItem("inicio_sesion") === null) {
    // redireccionar a la pagina de inicio
    window.location.href = "/index.html";
    
}
nombre.innerHTML = "Bienvenido " + JSON.parse(window.localStorage.getItem("inicio_sesion")).nombre;

const cerrarSesion = () => {
    // eliminar en local storage el inicio de sesion
    window.localStorage.removeItem("inicio_sesion");

    // redireccionar a la pagina de inicio
    window.location.href = "/index.html";
}

btn_cerrar_sesion.addEventListener("click", (e) => {
    e.preventDefault();
    cerrarSesion();
});