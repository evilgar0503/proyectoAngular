import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaDatosComponent } from './ropa-datos.component';

describe('RopaDatosComponent', () => {
  let component: RopaDatosComponent;
  let fixture: ComponentFixture<RopaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
