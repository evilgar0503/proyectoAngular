import { Ropa } from './../interfaces/ropa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../interfaces/collection';

@Injectable({
  providedIn: 'root'
})
export class ListarArticulosService {
  private apiUrl="http://localhost:8080/ropa";
  // variable http para poder reallizar peticiones asíncronas a la API
  constructor(private http:HttpClient) { }

  //Petición de tipo get que devuelve un observable de array de objetos del tipo Modulo de la interface
  listarRopa(): Observable<Ropa[]>{
    return this.http.get<Ropa[]>(this.apiUrl+"/obtener");
  }

  getRopaById(id: number):Observable<Ropa>{
    return this.http.get<Ropa>(this.apiUrl+"/obtener/ropa/"+id);
  }

  getRopaByCollectionId(id: number): Observable<Ropa[]> {
    return this.http.get<Ropa[]>(this.apiUrl+"/obtener/"+id)
  }

  anadirArticulo(articulo: Ropa): Observable<Ropa>{
    location.href="/articulos";
    return this.http.post<Ropa>(this.apiUrl+"/crearropa",articulo);
    }

    deleteArticulo(id: number): Observable<Ropa>{
      location.href="/articulos";
      return this.http.delete<Ropa>(this.apiUrl+"/delete/"+id);
    }

    editArticulo(articulo: Ropa): Observable<Ropa>{
      location.href="/articulos";
      return this.http.put<Ropa>(this.apiUrl+"/edit/"+articulo.id, articulo);
    }
}
