import { TestBed } from '@angular/core/testing';

import { CanvasServiceService } from './canvas-service.service';

describe('CanvasServiceService', () => {
  let service: CanvasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
