import { ServicioCarritoService } from './../../servicios/servicio-carrito.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  public ropas: Ropa[] = [];
  total: number= 0;
  constructor(private servicioCollection: ServicioCarritoService) {
  }

  ngOnInit(): void {
    this.ropas = JSON.parse(localStorage.getItem('cart')!)
    this.ropas.forEach(element => {
      this.total += parseFloat(element['precio']);
    });
  }

}
