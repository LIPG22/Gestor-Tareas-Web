// 1. SELECTORES: Obtenemos los elementos del HTML
const fechaElemento = document.querySelector('#fecha');
const lista = document.querySelector('#lista-tareas');
const input = document.querySelector('#input-tarea');
const botonEnter = document.querySelector('#btn-agregar');
const contador = document.querySelector('#contador');

// 2. CONFIGURACIÓN INICIAL
// Mostramos la fecha actual formateada
const fechaActual = new Date();
fechaElemento.innerHTML = fechaActual.toLocaleDateString('es-MX', {weekday:'long', month:'short', day:'numeric'});

// Variables de estado
let tareas = [];

// 3. FUNCIONES

// Agregar Tarea
function agregarTarea(tarea, id, realizado, eliminado) {
    if (eliminado) { return; } // Si está eliminada, no hacemos nada

    const REALIZADO = realizado ? 'completada' : ''; // Clase CSS condicional
    const ICONO = realizado ? 'fa-check-circle' : 'fa-circle'; // Icono condicional

    // Creamos el HTML dinámico (Template String)
    const elemento = `
        <li id="elemento">
            <i class="far ${ICONO}" data="realizado" id="${id}" style="cursor:pointer"></i>
            <p class="text ${REALIZADO}">${tarea}</p>
            <i class="fas fa-trash-alt btn-delete" data="eliminado" id="${id}"></i>
        </li>
    `;
    
    // Insertamos el HTML dentro de la lista (ul)
    lista.insertAdjacentHTML("beforeend", elemento);
}

// Tarea Realizada (Tachar)
function tareaRealizada(element) {
    element.classList.toggle('fa-check-circle');
    element.classList.toggle('fa-circle');
    element.parentNode.querySelector('.text').classList.toggle('completada');
    
    // Actualizamos el array de datos
    tareas[element.id].realizado = tareas[element.id].realizado ? false : true;
}

// Tarea Eliminada (Borrar)
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    tareas[element.id].eliminado = true;
}

// Actualizar Contador
function actualizarContador() {
    const pendientes = tareas.filter(t => !t.eliminado && !t.realizado).length;
    contador.innerText = pendientes;
}

// Guardar en LocalStorage (Persistencia)
function guardarLocalStorage() {
    localStorage.setItem('TODO', JSON.stringify(tareas));
    actualizarContador();
}

// 4. EVENTOS (Listeners)

botonEnter.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página
    const tarea = input.value;
    
    if (tarea) {
        agregarTarea(tarea, tareas.length, false, false);
        tareas.push({
            nombre: tarea,
            id: tareas.length,
            realizado: false,
            eliminado: false
        });
        guardarLocalStorage();
        input.value = '';
    }
});

// Al hacer clic dentro de la lista (Delegación de eventos)
lista.addEventListener('click', function(event) {
    const element = event.target;
    const elementData = element.attributes.data ? element.attributes.data.value : '';

    if (elementData === 'realizado') {
        tareaRealizada(element);
    } else if (elementData === 'eliminado') {
        tareaEliminada(element);
    }
    guardarLocalStorage();
});

// Cargar datos al iniciar
let data = localStorage.getItem('TODO');
if (data) {
    tareas = JSON.parse(data);
    contador.innerText = tareas.length;
    cargarLista(tareas);
} else {
    tareas = [];
    contador.innerText = 0;
}

function cargarLista(array) {
    array.forEach(function(item) {
        agregarTarea(item.nombre, item.id, item.realizado, item.eliminado);
    });
    actualizarContador();
}

// Botón Limpiar Todo
function limpiarTodo() {
    localStorage.clear();
    location.reload();
}