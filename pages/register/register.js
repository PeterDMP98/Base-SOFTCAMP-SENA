/*******************      Registro de Usuario ********************/
const register_nombre = document.getElementById("register_nombre");
const register_correo = document.getElementById("register_email");
const register_telefono = document.getElementById("register_telefono");
const register_Rol = document.getElementById("select_rol");
const register_direccion = document.getElementById("register_ubicacion");
const register_contraseña = document.getElementById("register_password");
const register_no_robot = document.getElementById("register_validacion");
const register_terminos = document.getElementById("register_terminos");

/*botones */
const register_terminos_btn = document.querySelector(".registrarme_btn");
const pages_inisiar_sesion_btn = document.querySelector(".pages-inisiar-sesion_btn");

const usuarios = JSON.parse(window.localStorage.getItem("usuarios")) || [];

const Register = () => {

    const usuario = {
        nombre: register_nombre.value,
        correo: register_correo.value,
        telefono: register_telefono.value,
        rol: register_Rol.value,
        direccion: register_direccion.value,
        contraseña: register_contraseña.value,
        no_robot: register_no_robot.checked,
        terminos: register_terminos.checked
    }
    
    
    if (usuario.nombre.length >= 3 && usuario.correo.includes("@") && usuario.correo.includes(".") && usuario.telefono.length >= 10 && usuario.direccion.length >= 5 && usuario.contraseña.length >= 6 && usuario.no_robot && usuario.terminos) {

        // validar si existe usuario en el local storage
        if (usuarios.length !== 0) {

            // validar si el correo ya existe
            const correoExistente = usuarios.find(usuarioExist => usuarioExist.correo === usuario.correo);

            if (correoExistente) return alert("El correo ya están registrados.");
            
            // validar si el telefono ya existe
            const telefonoExistente = usuarios.find(usuarioExist => usuarioExist.telefono === usuario.telefono);
            
            if (telefonoExistente) return alert("El teléfono ya están registrados.");


            agregarUsuario(usuario);

            // redireccionar a la pagina de carga
            window.location.href = "/pages/componentes/pantallaCarga.html";                 
            
        } else{
            // Si no hay usuarios, se agrega el nuevo usuario
            agregarUsuario(usuario);
            
            // redireccionar a la pagina de carga            
            window.location.href = "/pages/componentes/pantallaCarga.html";     
            
        }
        
    } else {
        alert("Por favor, complete todos los campos correctamente.");
        
    }

};


// ejecutar la funcion al dar click en el boton
register_terminos_btn.addEventListener("click", (e) => {
    e.preventDefault();
    Register();
});

pages_inisiar_sesion_btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/index.html";
})

// limpiar los campos
const limpiarCampos = () => {
    register_nombre.value = "";
    register_correo.value = "";
    register_telefono.value = "";
    register_Rol.value = "";
    register_direccion.value = "";
    register_contraseña.value = "";
    register_no_robot.checked = false;
    register_terminos.checked = false;
}

// agrgar usuario al local storage
const agregarUsuario = (usuario) => {
    usuarios.push(usuario);
        window.localStorage.setItem("usuarios", JSON.stringify(usuarios));

        limpiarCampos();
}