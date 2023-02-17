import { Component, Input } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css'],
})
export class CardCarritoComponent {
  @Input() ropa: Ropa;
  cart: Ropa[] = [];
  cantidad: any;
  constructor() {}

  ngOnInit() {

  }

   /*
    Multiplicar precio por la cantidad de productos
    */
  // actualizarPrecio() {
  //   this.cantidad = document.querySelector('.cantidad');
  //   this.ropa.precio = JSON.stringify(parseInt(this.ropa.precio) * parseInt(this.cantidad.value));
  //   console.log(this.ropa.precio)
  // }

  eliminardeCarrito(idEliminacion: number) {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['id'] == idEliminacion) {
        this.cart.splice(i, 1);
      }
    }

    localStorage.setItem('cart', JSON.stringify(this.cart));
    location.href = '/carrito';
  }
}
