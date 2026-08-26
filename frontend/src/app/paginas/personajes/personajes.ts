import { Component, OnInit, signal } from '@angular/core';
import { Data, Personaje } from '../../services/data';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.html',
  styleUrl: './personajes.css',
})
export class Personajes implements OnInit {
  personajes = signal<Personaje[]>([]);

  constructor(private data: Data) {}

  ngOnInit() {
    this.data.getPersonajes().subscribe((res) => {
      this.personajes.set(res.results);
    });
  }

  eliminar(personaje: Personaje) {
    this.personajes.update((lista) => lista.filter((p) => p.id !== personaje.id));
  }
}
