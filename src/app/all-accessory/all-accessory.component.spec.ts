import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccessoryComponent } from './all-accessory.component';

describe('AllAccessoryComponent', () => {
  let component: AllAccessoryComponent;
  let fixture: ComponentFixture<AllAccessoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAccessoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccessoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
