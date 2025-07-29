// esportacion de de module express y otros modulos necesarios.
import express from 'express'; // import express framework
import path from 'path'; // omportar path para manejar rutas de archivos
import { fileURLToPath} from 'url'; // importar fileURLToPath para convertir URL a ruta de archivo
import dotenv from 'dotenv'; 
import pool from './db/connection.js'

dotenv.config(); // cargar variables de entorno desde un archivo .env
const PORT = process.env.PORT || 3002; // establecer el puerto del servidor, si no está definido en .env, usar 3002
const app = express(); // crear una instancia de express

// obtener la ruta del directorio actual

const __filename = fileURLToPath(import.meta.url); // obtener el nombre del archivo actual
const __dirname = path.dirname(__filename); // obtener el nombre del directorio actual

// configurar express para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, '../public'))); // servir archivos estáticos desde el directorio 'public'

app.use(express.static(path.join(__dirname, '../dist'))); // para que funcione /dist/styles.css

/* INICIO - LOGIN */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html')); // enviar el archivo index.html al cliente
});

/*REGISTER */
app.get('/api/auth/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/modules/register/register.html'))
});

/*LOGIN */
app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, ''))
})



// en caso de pagina no encontrada, enviar un error 404
app.use((req, res) => {
    res.status(404).send('404 - Página no encontrada'); // enviar un mensaje de error 404 si la ruta no es encontrada
})

app.listen(PORT, () => {
    console.log(` ✅ Servidor escuchando en http://localhost:${PORT}`); // mensaje en consola indicando que el servidor está corriendo
    
})
