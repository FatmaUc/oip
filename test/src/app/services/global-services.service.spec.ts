import { TestBed } from '@angular/core/testing';

import { GlobalServicesService } from './global-services.service';

describe('GlobalServicesService', () => {
  let service: GlobalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
