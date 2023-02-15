import { Collection } from './../../interfaces/collection';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collectionsview',
  templateUrl: './collectionsview.component.html',
  styleUrls: ['./collectionsview.component.css']
})
export class CollectionsviewComponent {
  @Input() idCollection : number;
  id: number;
  collection: Collection;
  constructor(private servicioCollection: ListarCollectionsService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicioCollection.disparadorCollection.subscribe(data => {
      this.id = data;
      console.log(this.id)
    });

    console.log("Fuera-"+this.id)

    this.servicioCollection.getCollectionById(console.log(this.idCollection)).subscribe((collection) => {
      this.collection = collection
      console.log(collection);
    });
  }
}
