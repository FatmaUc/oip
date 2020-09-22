import { TestBed } from '@angular/core/testing';

import { CountryServicesService } from './country-services.service';

describe('CountryServicesService', () => {
  let service: CountryServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
