import { Component, OnInit } from '@angular/core';
import { PropertiesPanelService } from '../services/properties-panel.service';
import { SetPropertiesModel, Property } from '../model/canvas-model';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
})
export class PropertiesPanelComponent implements OnInit {
  isdisabled: boolean = true;
  constructor(private propertyPanelServiceHandler: PropertiesPanelService) {
    this.propertyPanelServiceHandler.invokeSetObjectPanelProperty$.subscribe(
      (Properties) => this.setPropertyPanelForSelectedObjects(Properties)
    );
  }

  PropertyPanelValues: SetPropertiesModel = {
    disablePropertyPanel: true,
    StrokeWidth: '',
    StrokeColor: '',
    FillColor: '',
    ObjectAngle: '',
  };

  ChangedPropertyData: Property = {
    propertyName: '',
    PropertyValue: '',
  };

  ngOnInit(): void {}

  onStrokeColorChange(value: string) {
    this.ChangedPropertyData.propertyName = 'stroke';
    this.ChangedPropertyData.PropertyValue = value;
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onStrokeWidthChange(value: string) {
    this.ChangedPropertyData.propertyName = 'strokeWidth';
    this.ChangedPropertyData.PropertyValue = Number(value);
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onFillColorChange(value: string) {
    this.ChangedPropertyData.propertyName = 'fill';
    this.ChangedPropertyData.PropertyValue = value;
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onAngleChange(value: string) {
    this.ChangedPropertyData.propertyName = 'angle';
    this.ChangedPropertyData.PropertyValue = Number(value);
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }

  setPropertyPanelForSelectedObjects(ObjectProperties: SetPropertiesModel) {
    if (ObjectProperties.disablePropertyPanel == true) this.isdisabled = true;
    else {
      this.isdisabled = false;
      this.PropertyPanelValues.StrokeWidth = ObjectProperties.StrokeWidth;
      this.PropertyPanelValues.StrokeColor = ObjectProperties.StrokeColor;
      this.PropertyPanelValues.FillColor = ObjectProperties.FillColor;
      this.PropertyPanelValues.ObjectAngle = ObjectProperties.ObjectAngle;
    }
  }
}
