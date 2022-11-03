import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInspectorPanelComponent } from './event-inspector-panel.component';

describe('EventInspectorPanelComponent', () => {
  let component: EventInspectorPanelComponent;
  let fixture: ComponentFixture<EventInspectorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventInspectorPanelComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInspectorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
