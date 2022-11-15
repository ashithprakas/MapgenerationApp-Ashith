import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SetPropertiesModel, Property } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class PropertiesPanelService {
  constructor() {}

  invokeSetObjectPanelProperty: Subject<SetPropertiesModel> = new Subject();
  invokeSetObjectPanelProperty$ =
    this.invokeSetObjectPanelProperty.asObservable();

  invokeSetObjectPropertyFromPanel: Subject<Property> = new Subject();
  invokeSetObjectPropertyFromPanel$ =
    this.invokeSetObjectPropertyFromPanel.asObservable();

  OnObjectSelected(Properties: SetPropertiesModel) {
    this.invokeSetObjectPanelProperty.next(Properties);
  }

  onPropertyPanelChange(ChangedPropertyData: Property) {
    this.invokeSetObjectPropertyFromPanel.next(ChangedPropertyData);
  }
}
