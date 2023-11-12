import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AviableClothesComponent } from './aviable-clothes.component';

describe('AviableClothesComponent', () => {
  let component: AviableClothesComponent;
  let fixture: ComponentFixture<AviableClothesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AviableClothesComponent]
    });
    fixture = TestBed.createComponent(AviableClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
