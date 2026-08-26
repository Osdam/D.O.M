import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface RespuestaApi {
  results: Personaje[];
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  private url = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<RespuestaApi> {
    return this.http.get<RespuestaApi>(this.url);
  }
}
