// config

// redirigir a la pagina de carga a la pagina de home
if (window.location.pathname.includes("pantallaCarga.html") && document.referrer.includes("register.html")) {
    console.log("despues de registrar");
    
    setTimeout(() => {
        window.location.href = "/index.html";
    }, 5000);
}


// redirigir a la pagina de carga a la pagina de inicio
if (window.location.pathname.includes("pantallaCarga.html") && document.referrer.includes("index.html")) {
    setTimeout(() => {
        window.location.href = "/pages/Home/home.html";
    }, 5000);
}
