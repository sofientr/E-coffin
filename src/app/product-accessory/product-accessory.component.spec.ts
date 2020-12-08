import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAccessoryComponent } from './product-accessory.component';

describe('ProductAccessoryComponent', () => {
  let component: ProductAccessoryComponent;
  let fixture: ComponentFixture<ProductAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
