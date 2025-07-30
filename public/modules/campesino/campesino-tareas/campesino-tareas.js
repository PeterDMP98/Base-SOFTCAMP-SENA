
/*funciona par ala hora NOTA: temporal */
function actualizarHora() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0')
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  document.getElementById('hora').textContent = `Hora: ${horas}:${minutos}`;
}

/*Funcion de fecha NOTA: temporal */
function mostrarFecha() {
  const ahora = new Date();
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fechaFormateada = ahora.toLocaleDateString('es-Es', opciones);
  document.getElementById('fecha').textContent = fechaFormateada;
}

/*ejecucion desde que carga la pagina */
actualizarHora();
mostrarFecha();
setInterval(actualizarHora, 60000)


/*apertura y cierre de menu */


lucide.createIcons(); // coneccion de los iconos

const toggleButtom = document.getElementById('toggleButtom')

function toggleMenu() {
  const aside = document.getElementById('menuLateral'); /*seleccion del menu completo*/
  const icon = document.getElementById('toggleIcon'); /*boton de cierre y apertura */
  const texts = aside.querySelectorAll('.menu-text'); // seleccion de todos los componentes del menu

  aside.classList.toggle('w-64'); // cambiar medida w
  aside.classList.toggle('w-20'); // cambiar medida w

  texts.forEach(el => {
    el.classList.toggle('hidden'); // ocultar los elementos del menu
  });

  icon.textContent = aside.classList.contains('w-20') ? '⏵' : '⏴'; // cambio de flecha segun cual este activa
};

toggleButtom.addEventListener('click', () => {
  toggleMenu()
});

document.addEventListener('DOMContentLoaded', () => {
  const aside = document.getElementById('menuLateral');
  if (aside.classList.contains('w-20')) {
    aside.querySelectorAll('.menu-text').forEach(el => el.classList.add('hidden'));
    document.getElementById('toggleIcon').textContent = '⏵';
  }
});