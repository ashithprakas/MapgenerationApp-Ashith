import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor() {}

  invokeEventInspectorOutput: Subject<string> = new Subject();
  invokeEventInspectorOutput$ = this.invokeEventInspectorOutput.asObservable();

  addObjectEventMessage(text: string) {
    this.invokeEventInspectorOutput.next(text);
  }
}
