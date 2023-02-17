import { Ropa } from './../interfaces/ropa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../interfaces/collection';

@Injectable({
  providedIn: 'root'
})
export class ListarArticulosService {
  private apiUrl="http://localhost:5555/ropa";
  // variable http para poder reallizar peticiones asíncronas a la API
  constructor(private http:HttpClient) { }

  //Petición de tipo get que devuelve un observable de array de objetos del tipo Modulo de la interface
  listarRopa(): Observable<Ropa[]>{
    return this.http.get<Ropa[]>(this.apiUrl);
  }
}
