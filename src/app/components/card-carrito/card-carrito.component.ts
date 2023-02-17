import { Component, Input } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';

@Component({
  selector: 'app-card-carrito',
  templateUrl: './card-carrito.component.html',
  styleUrls: ['./card-carrito.component.css']
})
export class CardCarritoComponent {
  @Input() ropa: Ropa;

 constructor() {}

 ngOnInit() {
  console.log(this.ropa)
 }
}
