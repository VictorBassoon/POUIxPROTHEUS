import { TestBed } from '@angular/core/testing';

import { ProtheusService } from './protheus.service';

describe('ProtheusService', () => {
  let service: ProtheusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProtheusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
