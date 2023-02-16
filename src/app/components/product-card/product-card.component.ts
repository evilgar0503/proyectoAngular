import { Component, Input } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() ropa: Ropa;
  @Input() abreviatura: string;

  constructor(private servicioCarrito: ListarCollectionsService) {}

  anadirCarrito(data: Ropa) {
    this.servicioCarrito.disparadorCollection.emit(data);
    console.log(data)
  }
}
