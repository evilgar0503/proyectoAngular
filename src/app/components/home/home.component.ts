import { Component } from '@angular/core';
import { Collection } from 'src/app/interfaces/collection';
import { ListarCollectionsService } from 'src/app/servicios/listar-collections.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  collection: Collection[] = [];

  // inyectar el servicio en el constructor
  constructor(private listarCollections: ListarCollectionsService) {}

  //nos suscribimos al servicio
  ngOnInit(): void {
    this.listarCollections.listarCollections().subscribe((collection) => {
      this.collection = collection;
      console.log(collection);
    });
  }

}
