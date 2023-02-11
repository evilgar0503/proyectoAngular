import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collectionsview',
  templateUrl: './collectionsview.component.html',
  styleUrls: ['./collectionsview.component.css']
})
export class CollectionsviewComponent {
  constructor(private rutaActiva: ActivatedRoute) { }

  nombre!: string;
  imglink!: string;

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.params['nombre'];
    if (this.nombre === "The Cupidon't Collection") {
      this.imglink = "cupido"
    }
    else if(this.nombre === "Tiger") {
      this.imglink = "tiger";
    }
  }
}
