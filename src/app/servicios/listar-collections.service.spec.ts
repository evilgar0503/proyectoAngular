import { TestBed } from '@angular/core/testing';

import { ListarCollectionsService } from './listar-collections.service';

describe('ListarCollectionsService', () => {
  let service: ListarCollectionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCollectionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
