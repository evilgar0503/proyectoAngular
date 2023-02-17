import { ListarArticulosService } from './../../servicios/listar-articulos.service';
import { Component } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';

@Component({
  selector: 'app-ropaview',
  templateUrl: './ropaview.component.html',
  styleUrls: ['./ropaview.component.css']
})
export class RopaviewComponent {
  articulos: Ropa[];


  constructor(private servicioArticulos: ListarArticulosService) { }
  ngOnInit() {
    this.servicioArticulos.listarRopa().subscribe((articulos) => {
      this.articulos = articulos;
    });
  }
}
