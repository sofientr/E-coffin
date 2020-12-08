import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutAccesssoryComponent } from './produt-accesssory.component';

describe('ProdutAccesssoryComponent', () => {
  let component: ProdutAccesssoryComponent;
  let fixture: ComponentFixture<ProdutAccesssoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutAccesssoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutAccesssoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
