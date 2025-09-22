import { TestBed } from '@angular/core/testing';

import { Contactdataservice } from './contactdataservice';

describe('Contactdataservice', () => {
  let service: Contactdataservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contactdataservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
