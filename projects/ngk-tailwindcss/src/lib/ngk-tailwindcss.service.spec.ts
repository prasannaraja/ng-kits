import { TestBed } from '@angular/core/testing';

import { NgkTailwindcssService } from './ngk-tailwindcss.service';

describe('NgkTailwindcssService', () => {
  let service: NgkTailwindcssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgkTailwindcssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
