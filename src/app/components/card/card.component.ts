import { Collection } from './../../interfaces/collection';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() collection: Collection;

  constructor(private servicioCollection: ListarCollectionsService) {}

  public mostrarCuadro(id: number) {
    const cuadro: any =  document.querySelectorAll('.cuadro');
    cuadro.forEach(function (e: any) {
      if(id == e.id) {
        cuadro[e.id].style.display = "flex";
      }
      });
  }

  public ocultarCuadro(id: number) {
    const cuadro: any =  document.querySelectorAll('.cuadro');
    cuadro.forEach(function (e: any) {
      if(id == e.id) {
        cuadro[e.id].style.display = "none";
      }
    });
  }

  cargarCollection(data: Collection) {
    this.servicioCollection.disparadorCollection.emit(data);
  }

  ngOnInit(): void {
  }

}
