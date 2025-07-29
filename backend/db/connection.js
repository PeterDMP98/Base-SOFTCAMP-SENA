import pgLib from 'pg';
import dotenv from 'dotenv';

const {Pool} = pgLib;
dotenv.config();

/*CONFIGURACION DE CONECCION A LA BASE DE DATOS */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

/*verificar la coneccion inciial*/

try {
  const client = await pool.connect();
  console.log('✅ Conectado a la base de datos PostgreSQL', process.env.DB_NAME);
  client.release();
} catch (error) {
  console.log('❌ Error de conexión a la base de datos', error.stack);
  
}

/*exportar la coneccion dela base de datos */
export default pool;