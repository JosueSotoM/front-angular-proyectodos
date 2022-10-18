import { TestBed } from '@angular/core/testing';

import { HorasEjecutaService } from './horas-ejecuta.service';

describe('HorasEjecutaService', () => {
  let service: HorasEjecutaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorasEjecutaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
