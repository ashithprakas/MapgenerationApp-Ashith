import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../services/event-service.service';

@Component({
  selector: 'app-event-inspector-panel',
  templateUrl: './event-inspector-panel.component.html',
  styleUrls: ['./event-inspector-panel.component.css'],
})
export class EventInspectorPanelComponent implements OnInit {
  eventtext?: string;
  constructor(private eventServiceHandler: EventServiceService) {}

  ngOnInit(): void {
    this.eventServiceHandler.invokeEventInspectorOutput$.subscribe(
      (eventMessage) => this.AddEventMessageToPanel(eventMessage)
    );
  }

  AddEventMessageToPanel(eventMessage: string) {
    this.eventtext = eventMessage;
  }
}
