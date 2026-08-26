import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Personajes } from './paginas/personajes/personajes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Personajes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
}
