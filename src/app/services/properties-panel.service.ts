import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SetPropertiesModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class PropertiesPanelService {
  constructor() {}

  invokeSetObjectPanelProperty: Subject<SetPropertiesModel> = new Subject();
  invokeSetObjectPanelProperty$ =
    this.invokeSetObjectPanelProperty.asObservable();

  OnObjectSelected(Properties: SetPropertiesModel) {
    this.invokeSetObjectPanelProperty.next(Properties);
  }
}
