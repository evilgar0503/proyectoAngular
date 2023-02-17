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
  cart: any[] = []
  total: number= 0;
  constructor(private servicioCollection: ServicioCarritoService) {      
  }

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart')!)
    this.cart.forEach(element => {
      const producto: Ropa = {
        id: element['id'],
        nombre: element['nombre'],
        img1: element['img1'],
        img2: element['img2'],
        precio: element['precio'],
        material: element['material'],
        descripcion: element['descripcion'],
      }
      this.total += element['precio'];
      console.log(this.total)
      this.ropas.push(producto)
    });
    console.log(this.ropas)
  }

}
