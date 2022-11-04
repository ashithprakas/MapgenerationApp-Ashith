import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor() {}

  invokeEventInspectorOutput: Subject<string> = new Subject();
  invokeEventInspectorOutput$ = this.invokeEventInspectorOutput.asObservable();

  addObjectEventMessage(EventText: string, ObjectType?: string) {
    let ObjectName: string = '';
    if (ObjectType == 'rect') {
      ObjectName = 'Rectangle ';
    } else if (ObjectType == 'triangle') {
      ObjectName = 'Triangle ';
    } else if (ObjectType == 'circle') {
      ObjectName = 'Circle ';
    } else if (ObjectType == 'activeSelection') {
      ObjectName = 'Group Of ';
    }

    this.invokeEventInspectorOutput.next(ObjectName + EventText);
  }
}
