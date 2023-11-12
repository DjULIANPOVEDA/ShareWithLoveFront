import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClothComponent } from './register-cloth.component';

describe('RegisterClothComponent', () => {
  let component: RegisterClothComponent;
  let fixture: ComponentFixture<RegisterClothComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterClothComponent]
    });
    fixture = TestBed.createComponent(RegisterClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
