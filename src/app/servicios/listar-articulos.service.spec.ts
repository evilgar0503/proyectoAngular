import { TestBed } from '@angular/core/testing';

import { ListarArticulosService } from './listar-articulos.service';

describe('ListarArticulosService', () => {
  let service: ListarArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
