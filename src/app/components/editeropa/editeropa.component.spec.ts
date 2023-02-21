import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeropaComponent } from './editeropa.component';

describe('EditeropaComponent', () => {
  let component: EditeropaComponent;
  let fixture: ComponentFixture<EditeropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
