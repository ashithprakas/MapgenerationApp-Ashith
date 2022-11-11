import { TestBed } from '@angular/core/testing';

import { PropertiesPanelService } from './properties-panel.service';

describe('PropertiesPanelService', () => {
  let service: PropertiesPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
