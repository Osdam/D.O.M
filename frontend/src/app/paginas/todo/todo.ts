import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Tarea {
  texto: string;
  hecha: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  tareaNueva = '';
  tareas: Tarea[] = [];

  agregarTarea() {
    if (this.tareaNueva.trim() === '') return;
    this.tareas.push({ texto: this.tareaNueva, hecha: false });
    this.tareaNueva = '';
  }

  toggleHecha(tarea: Tarea) {
    tarea.hecha = !tarea.hecha;
  }

  borrarTarea(tarea: Tarea) {
    this.tareas = this.tareas.filter((t) => t !== tarea);
  }
}
