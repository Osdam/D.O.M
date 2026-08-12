# D.O.M — Lista de tareas

Proyecto minimo para entender el **Document Object Model** con JavaScript puro.
Sin librerias, sin instalacion: abre `index.html` en el navegador.

## Que hace

- Agregar una tarea con el nombre de la persona asignada
- Ver la lista de tareas asignadas
- Contador con el total de tareas, se actualiza solo
- Clic en el texto = marcar como hecha
- Clic en la X = borrar

## Los 4 conceptos del DOM que usa

| Que quieres hacer | Codigo |
|---|---|
| Buscar un elemento del HTML | `document.getElementById("lista")` |
| Reaccionar a un clic | `boton.addEventListener("click", funcion)` |
| Crear un elemento nuevo | `document.createElement("li")` |
| Meterlo en la pagina | `lista.appendChild(li)` |

Y para modificar lo que ya existe:

| Que quieres hacer | Codigo |
|---|---|
| Cambiar el texto | `span.textContent = "hola"` |
| Leer lo que escribio el usuario | `input.value` |
| Poner/quitar una clase CSS | `li.classList.toggle("hecha")` |
| Borrar un elemento | `li.remove()` |
| Contar cuantos hijos tiene | `lista.children.length` |

## La idea principal

El HTML es solo el punto de partida. El navegador lo convierte en un **arbol de
objetos** (el DOM), y JavaScript puede tocar ese arbol en vivo: buscar ramas,
crear ramas nuevas, cambiarlas o cortarlas. La pagina cambia sin recargarse.

```
document
  └── body
       ├── form      <- aqui escuchamos el evento
       └── ul#lista  <- aqui creamos los <li> uno por uno
```

## Archivos

- [index.html](index.html) — la estructura de partida
- [styles.css](styles.css) — los estilos (incluye la clase `.hecha`)
- [app.js](app.js) — todo el DOM, comentado paso a paso
