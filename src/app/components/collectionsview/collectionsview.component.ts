import { ListarArticulosService } from './../../servicios/listar-articulos.service';
import { Collection } from 'src/app/interfaces/collection';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Ropa } from 'src/app/interfaces/ropa';

@Component({
  selector: 'app-collectionsview',
  templateUrl: './collectionsview.component.html',
  styleUrls: ['./collectionsview.component.css']
})
export class CollectionsviewComponent implements OnInit{
  collection: Collection;
  ropa : Ropa[];
  constructor(private servicioCollection: ListarCollectionsService, private rutaActiva: ActivatedRoute, private servicioArticulos: ListarArticulosService) {

  }

  ngOnInit() {
    this.servicioCollection.getCollectionById(this.rutaActiva.snapshot.params['id']).subscribe((collection)=> {
      this.collection = collection;
    });
    this.servicioArticulos.getRopaByCollectionId(this.rutaActiva.snapshot.params['id']).subscribe((ropa) => {
      this.ropa = ropa;
    })
  }

}
