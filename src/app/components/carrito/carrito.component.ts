import { Component, Input, OnInit } from '@angular/core';
import { Ropa } from 'src/app/interfaces/ropa';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  public ropas: Ropa[] = [];
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.ropas = JSON.parse(localStorage.getItem('cart')!);
    this.ropas.forEach((element) => {
      this.total += parseFloat(element['precio']);
    });
  }

  realizarCompra() {
    Swal.fire({
      icon: 'success',
      title: 'Compra realizada con éxito.',
      text: 'Se ha cargado un total de: ' + this.total + '€',
      width: 600,
      padding: '2em',
      color: '#716add',
      backdrop: `
        rgba(220,220,220,0.5)
        left top
      `,
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('cart', JSON.stringify([]));
        location.href = '/carrito';
      }
    });
  }
}
