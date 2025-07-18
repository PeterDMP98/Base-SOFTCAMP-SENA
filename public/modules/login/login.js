/******************** Inicio de Session ********************/

// validad si existe un inicio de sesion
if (window.localStorage.getItem("inicio_sesion") !== null) {
    // redireccionar a la pagina de inicio
    window.location.href = "/pages/Home/home.html";
}

const session_correo = document.getElementById("iniciar-sesion_email");
const session_contraseña = document.getElementById("iniciar-sesion_password");

/*botones */
const session_btn = document.querySelector(".inisiar-sesion_btn");
const pages_register_btn = document.querySelector(".page-register_btn");

const Login =  () =>{
    console.log("Login");
    
    const correo = session_correo.value;
    const contraseña = session_contraseña.value;

    // recuperar el usuario del local storage
    const usuario = JSON.parse(window.localStorage.getItem("usuarios")) || []; // se devuelve un array vacio si no hay usuarios para evitar errores
    
    // validar si existe el usuario
    const usuarioExistente = usuario.find(usuario => usuario.correo === correo && usuario.contraseña === contraseña);

    if (correo.includes("@") && correo.includes(".") && contraseña.length >= 6) {
        // validar si el usuario existe
        if (usuarioExistente) {
            
            const sesionUsuario = {
                session: true,
                nombre: usuarioExistente.nombre
            }
            
            // guardar inicio de sesion en el local storage
            window.localStorage.setItem("inicio_sesion", JSON.stringify(sesionUsuario));

            limpiarCampos();
            
            // redireccionar a la pagina de carga
            window.location.href = "./pages/componentes/pantallaCarga.html";
            
        } else {
            alert("Por favor, ingrese un correo electrónico y una contraseña válidos.");
        }
        
    } else{
        alert("Por favor, complete todos los campos correctamente.");
    }
};

session_btn.addEventListener("click", (e) => {
    e.preventDefault();
    Login(); 
});

pages_register_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/pages/register/register.html";
})
    
const limpiarCampos = () => {
    session_correo.value = "";
    session_contraseña.value = "";
}