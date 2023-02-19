import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { Collection } from 'src/app/interfaces/collection';
import { ListarArticulosService } from './../../servicios/listar-articulos.service';
import { Ropa } from 'src/app/interfaces/ropa';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createropa',
  templateUrl: './createropa.component.html',
  styleUrls: ['./createropa.component.css']
})
export class CreateropaComponent {

  collections: Collection[];
  articulo: Ropa;
  ropas:Ropa[]=[];

  constructor(private servicioRopa: ListarArticulosService, private servicioCollection: ListarCollectionsService) {}

  ngOnInit() {
    this.servicioCollection.listarCollections().subscribe((collection) => {
      this.collections = collection;
    });
  }

  agregarArticulo(){
    this.articulo = this.obtenerDatos();
    this.servicioRopa.anadirArticulo(this.articulo).subscribe((mod=>{
      this.ropas.push(mod);console.log(this.ropas)
    }))
  }

  obtenerDatos() {
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value;
    var collection = (<HTMLInputElement>document.getElementById("id")).value;
    var img1 = (<HTMLInputElement>document.getElementById("img1")).value;
    var img2 = (<HTMLInputElement>document.getElementById("img2")).value;
    var material = (<HTMLInputElement>document.getElementById("material")).value;
    var descripcion = (<HTMLInputElement>document.getElementById("descripcion")).value;
    var precio = (<HTMLInputElement>document.getElementById("precio")).value;
    console.log(nombre)
    console.log(collection)
    console.log(img1)
    console.log(img2)
    console.log(material)
    console.log(descripcion)
    console.log(precio)

    const ropa: Ropa =  {"id":0, "idCollection": parseInt(collection), "nombre": nombre, "img1": img1, "img2": img2, "precio": precio, "material": material, "descripcion": descripcion};
    return ropa;
  }

  


}
