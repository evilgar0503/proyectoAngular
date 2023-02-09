import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() img: string="";
  @Input() route: string="";
  @Input() title: string="";



  public mostrarCuadro() {
    const cuadro: HTMLElement =  document.getElementsByClassName('cuadro');
    console.log(cuadro)
    cuadro.style.display = "block";
  }

}
