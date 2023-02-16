import { Collection } from './../../interfaces/collection';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-collectionsview',
  templateUrl: './collectionsview.component.html',
  styleUrls: ['./collectionsview.component.css']
})
export class CollectionsviewComponent implements OnInit{

  @Input() collection : Collection;
  constructor(private servicioCollection: ListarCollectionsService, private rutaActiva: ActivatedRoute) {

  }

  ngOnInit() {
    this.servicioCollection.getCollectionById(this.rutaActiva.snapshot.params['id']).subscribe((data)=> {
      this.collection = data;
    });
  }

}
