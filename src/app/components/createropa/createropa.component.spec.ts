import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateropaComponent } from './createropa.component';

describe('CreateropaComponent', () => {
  let component: CreateropaComponent;
  let fixture: ComponentFixture<CreateropaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateropaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
