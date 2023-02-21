import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ropa } from 'src/app/interfaces/ropa';
import { ListarArticulosService } from 'src/app/servicios/listar-articulos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ropa-datos',
  templateUrl: './ropa-datos.component.html',
  styleUrls: ['./ropa-datos.component.css'],
})
export class RopaDatosComponent {
  articulo: Ropa;
  cart: Ropa[] = [];
  carrito: boolean;

  constructor(
    private servicioRopa: ListarArticulosService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servicioRopa
      .getRopaById(this.rutaActiva.snapshot.params['id'])
      .subscribe((ropa) => {
        this.articulo = ropa;
      });
  }

  anadirCarrito(idProducto: number) {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
    this.carrito = this.comprobarCarrito(idProducto);

    if (!this.carrito) {
      this.cart = JSON.parse(localStorage.getItem('cart')!);
      this.cart.push(this.articulo);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      Swal.fire({
        template: "success",
        toast: true,
        position: "top",
        iconColor: "white",
        icon: "success",
        background: "#a5dc86",
        title: "Añadido correctamente.",
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    }
    else {
      Swal.fire({
        template: "#mytemplate",
        toast: true,
        position: "top",
        iconColor: "white",
        icon: "warning",
        background: "#ff5260",
        color: "white",
        title: "Producto ya añadido en el carrito.",
        customClass: {
          popup: "swal2-toast",
        },
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false,
      })
    }
  }

  comprobarCarrito(idProducto: number) {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i]['id'] == idProducto) {
        return true;
      }
    }
    return false;
  }

  deleteArticulo(id: number) {
    this.servicioRopa.deleteArticulo(id).subscribe((ropa) => {
      location.href="/articulos";
      console.log(ropa);
    });
  }
}
