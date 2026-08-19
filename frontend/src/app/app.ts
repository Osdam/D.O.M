import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Todo } from './paginas/todo/todo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Todo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
