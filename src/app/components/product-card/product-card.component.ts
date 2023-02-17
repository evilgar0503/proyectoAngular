import { ServicioCarritoService } from './../../servicios/servicio-carrito.service';
import { Component, Input } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() ropa: Ropa;
  @Input() abreviatura: string;
  cart: Ropa[];

  constructor(private servicioCarrito: ServicioCarritoService) {}

  ngOnInit() {
    console.log(this.ropa);
  }

  anadirCarrito(): void {
    console.log(this.ropa);
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    this.cart.push(this.ropa);
    localStorage.setItem('cart', JSON.stringify(this.cart));

    // this.servicioCarrito.disparadorCarrito.emit(data);
    // console.log(data)
  }
}
