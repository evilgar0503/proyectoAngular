import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collection } from 'src/app/interfaces/collection';
import { Ropa } from 'src/app/interfaces/ropa';
import { ListarArticulosService } from 'src/app/servicios/listar-articulos.service';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';

@Component({
  selector: 'app-editeropa',
  templateUrl: './editeropa.component.html',
  styleUrls: ['./editeropa.component.css'],
})
export class EditeropaComponent {
  collections: Collection[];
  articulo: Ropa;
  ropas: Ropa[] = [];
  encontrado: number;

  constructor(
    private servicioRopa: ListarArticulosService,
    private servicioCollection: ListarCollectionsService,
    private rutaActiva: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servicioRopa
      .getRopaById(this.rutaActiva.snapshot.params['id'])
      .subscribe((ropa) => {
        this.articulo = ropa;
      });

    this.servicioCollection.listarCollections().subscribe((collection) => {
      this.collections = collection;
      this.comprobarIguales();
    });
  }

  editArticulo() {
    this.articulo = this.obtenerDatos();
    this.servicioRopa.editArticulo(this.articulo).subscribe((ropa) => {
      location.href = '/articulos';
    });
  }

  obtenerDatos() {
    var nombre = (<HTMLInputElement>document.getElementById('nombre')).value;
    var collection = (<HTMLInputElement>document.getElementById('collection')).value;
    var img1 = (<HTMLInputElement>document.getElementById('img1')).value;
    var img2 = (<HTMLInputElement>document.getElementById('img2')).value;
    var material = (<HTMLInputElement>document.getElementById('material')).value;
    var descripcion = (<HTMLInputElement>document.getElementById('descripcion')).value;
    var precio = (<HTMLInputElement>document.getElementById('precio')).value;

    const ropa: Ropa = {
      id: this.articulo.id,
      idCollection: parseInt(collection),
      nombre: nombre,
      img1: img1,
      img2: img2,
      precio: precio,
      material: material,
      descripcion: descripcion,
    };
    return ropa;
  }

  comprobarIguales() {
    this.collections.forEach((collection) => {
      console.log(collection.id + ' - ' + this.articulo.idCollection);
      if (collection.id == this.articulo.idCollection) {
        this.encontrado = collection.id;
      }
    });
  }
}
