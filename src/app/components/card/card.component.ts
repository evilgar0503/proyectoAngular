import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img: string;
  @Input() route: string;
  @Input() title: string;
  @Input() id: number;


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

}
