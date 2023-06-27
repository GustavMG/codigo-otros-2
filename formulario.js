//* Se modifico el id que se tenia seleccionado ("#form") por una clase (".formulario") utilizada en el html
var formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  // *accedemos a los elementos del formulario
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  //* Obtenemos los datos especificos de los inputs
  var nombre = n.value
  var edad = e.value

  // * Obtenemos los datos del selecctor del formulario
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// * Se crea un boton de borrar a un invitado generado sin embargo esta de mas ya que se elimina individualmente a los invitados
// var botonBorrar = document.createElement("button")
// botonBorrar.textContent = "Eliminar invitado"
// botonBorrar.id = "boton-borrar"
// var corteLinea = document.createElement("br")
// document.body.appendChild(corteLinea)
// document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  // * Pequeña seleccion de la nacionalidad ya que la lista nos manda el value y aqui lo seleccionamos
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
// * Se agrega una clase al div generado
// * Se corrige el metodo added por add ya que es el que se utiliza para agregar las clases
elementoLista.classList.add("elemento-lista")
// * Creamos el elemento en el padre "lista" quien es el div donde se anexan los invitados
lista.appendChild(elementoLista)

// * Aqui se crean los elementos que sean pintados en el div generado con anterioridad, que es donde se pintaran los datos del formulario
// * sin embargo estamos duplicando código ya que esto lo DEBE de hacer la función de crearElemento():
// var spanNombre = document.createElement("span")
// var inputNombre = document.createElement("input")
// var espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

// * Función que crea los elementos en el DOM con los datos de entrada del formulario
function crearElemento(descripcion, valor) {
  // * Creamos la etiqueta de la descripción
var spanNombre = document.createElement("span")
// * Creamos la etiqueta de el dato de entrada
var inputNombre = document.createElement("input")
// * Le damos un espacito para que no este todo junto
var espacio = document.createElement("br")
// * Aqui separamos la parte de la descripción (nombre, edad, nacionalidad)
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 

// * Se pintan los elementos en el navegador
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

// * Aqui se invoca a la función donde se crean los elementos donde se imprimen los valores obtenidos del formulario
crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)

// * Aqui se crea el boton que SI elimina al invitado creado
var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

// * Evento para borrar los elementos colocados en el dom
botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}