import { TestBed } from '@angular/core/testing';

import { ProductAccessoryService } from './product-accessory.service';

describe('ProductAccessoryService', () => {
  let service: ProductAccessoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAccessoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
