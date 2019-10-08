import { TestBed } from '@angular/core/testing';

import { GhibliService } from './ghibli.service';

describe('GhibliService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GhibliService = TestBed.get(GhibliService);
    expect(service).toBeTruthy();
  });
});
