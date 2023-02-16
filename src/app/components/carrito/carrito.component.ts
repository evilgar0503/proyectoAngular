import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit{

  @Input() ropa: Ropa[] = [];
  constructor(private servicioCollection: ListarCollectionsService) {

    this.servicioCollection.disparadorCollection.subscribe((data: Ropa) => {
      console.log("hola");

      this.ropa.push(data);
      console.log(this.ropa)
    });
  }

  ngOnInit() {

    console.log("recibiendo")
  }

}
