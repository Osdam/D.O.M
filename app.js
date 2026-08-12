// ============================================
//  D.O.M = Document Object Model
//  El navegador convierte tu HTML en objetos
//  que JavaScript puede leer y modificar.
// ============================================


// 1) BUSCAR elementos del HTML
//    document.getElementById busca por el id="..." del HTML
const formulario = document.getElementById("formulario");
const inputTarea = document.getElementById("tarea");
const inputPersona = document.getElementById("persona");
const lista = document.getElementById("lista");
const contador = document.getElementById("contador");


// 2) ESCUCHAR un evento
//    "submit" ocurre cuando el usuario da clic en Agregar o pulsa Enter
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // evita que la pagina se recargue

  // .value = lo que el usuario escribio dentro del input
  const texto = inputTarea.value;
  const persona = inputPersona.value;

  // Si esta vacio, no hacemos nada
  if (texto === "") return;

  agregarTarea(texto, persona);

  // Limpiamos los inputs para la siguiente tarea
  inputTarea.value = "";
  inputPersona.value = "";
});


// 3) CREAR elementos nuevos y meterlos en la pagina
function agregarTarea(texto, persona) {

  // document.createElement crea una etiqueta HTML desde cero
  const li = document.createElement("li");

  // Dentro del <li> ponemos un <span> con el texto
  const span = document.createElement("span");
  span.textContent = persona ? texto + " - " + persona : texto;

  // Y un boton para borrar
  const boton = document.createElement("button");
  boton.textContent = "X";
  boton.className = "borrar";

  // appendChild = "mete esto adentro"
  li.appendChild(span);
  li.appendChild(boton);
  lista.appendChild(li); // el <li> entra en el <ul> del HTML


  // 4) MODIFICAR elementos que ya existen
  //    classList.toggle agrega la clase si no esta, y la quita si ya esta
  span.addEventListener("click", function () {
    li.classList.toggle("hecha");
  });

  //    remove() elimina el elemento de la pagina
  boton.addEventListener("click", function () {
    li.remove();
    actualizarContador(); // al borrar, el total cambia
  });

  actualizarContador(); // al agregar, el total cambia
}


// 5) CONTAR elementos
//    lista.children = todos los <li> que hay dentro del <ul>
//    .length = cuantos son
function actualizarContador() {
  const total = lista.children.length;

  // Si es 1 decimos "tarea", si no "tareas"
  const palabra = total === 1 ? "tarea" : "tareas";

  contador.textContent = "Total: " + total + " " + palabra;
}
