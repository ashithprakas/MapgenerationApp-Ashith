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

  invokeSetObjectPropertyFromPanel: Subject<SetPropertiesModel> = new Subject();
  invokeSetObjectPropertyFromPanel$ =
    this.invokeSetObjectPropertyFromPanel.asObservable();

  OnObjectSelected(Properties: SetPropertiesModel) {
    this.invokeSetObjectPanelProperty.next(Properties);
  }

  onPropertyPanelChange(Properties: SetPropertiesModel) {
    this.invokeSetObjectPropertyFromPanel.next(Properties);
    console.log('Property Panel Changed');
  }
}
