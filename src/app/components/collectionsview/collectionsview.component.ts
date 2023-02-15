import { Component, OnInit, Input  } from '@angular/core';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collectionsview',
  templateUrl: './collectionsview.component.html',
  styleUrls: ['./collectionsview.component.css']
})
export class CollectionsviewComponent {

  nombre!: string;
  id: number;
  title: string;
  abreviatura: string;
  constructor(private listarCollections: ListarCollectionsService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.nombre = this.rutaActiva.snapshot.params['nombre'];
    if (this.nombre === "cupido") {
      this.title = "The Cupidon't Collection"
    }
    else if(this.nombre === "Tiger") {
      this.title = "tiger";
    }

      this.listarCollections.getCollectionById(this.id).subscribe((collection) => {
        this.title = collection.title;
        this.abreviatura = collection.abreviatura;
        console.log(collection);
    });
  }
}
