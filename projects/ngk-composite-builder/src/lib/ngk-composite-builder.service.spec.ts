import { TestBed } from '@angular/core/testing';

import { NgkCompositeBuilderService } from './ngk-composite-builder.service';

describe('NgkCompositeBuilderService', () => {
  let service: NgkCompositeBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgkCompositeBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
