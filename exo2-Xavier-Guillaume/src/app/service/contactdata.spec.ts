import { TestBed } from '@angular/core/testing';

import { Contactdata } from './contactdata';

describe('Contactdata', () => {
  let service: Contactdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Contactdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
