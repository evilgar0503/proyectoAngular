import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ropa } from '../interfaces/ropa';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  articulos: Ropa[] = [];
  @Output() disparadorCarrito: EventEmitter<any> = new EventEmitter();


  constructor() {}

  public changeCart(data: Ropa) {
  }
}
