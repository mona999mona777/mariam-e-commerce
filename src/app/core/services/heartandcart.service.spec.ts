import { TestBed } from '@angular/core/testing';

import { HeartandcartService } from './heartandcart.service';

describe('HeartandcartService', () => {
  let service: HeartandcartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartandcartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
