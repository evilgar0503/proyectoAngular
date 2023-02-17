import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopaviewComponent } from './ropaview.component';

describe('RopaviewComponent', () => {
  let component: RopaviewComponent;
  let fixture: ComponentFixture<RopaviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RopaviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RopaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
