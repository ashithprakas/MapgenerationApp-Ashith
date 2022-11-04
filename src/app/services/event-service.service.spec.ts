import { TestBed } from '@angular/core/testing';

import { EventInspectorService } from './eventInspector.service';

describe('EventServiceService', () => {
  let service: EventInspectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventInspectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
