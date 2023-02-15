import { Injectable } from '@angular/core';
import { Collection } from '../interfaces/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json',}),
 };

@Injectable({
  providedIn: 'root'
})
export class ListarCollectionsService {
  private apiUrl="http://localhost:5555/collections";
  // variable http para poder reallizar peticiones asíncronas a la API
  constructor(private http:HttpClient) { }

  //Petición de tipo get que devuelve un observable de array de objetos del tipo Modulo de la interface
  listarCollections(): Observable<Collection[]>{
  console.log("entra")

    return this.http.get<Collection[]>(this.apiUrl);
  }

  getCollectionById(id: number):Observable<Collection>{
    console.log(id);
    return this.http.get<Collection>(this.apiUrl+"/"+id);
  }
}
