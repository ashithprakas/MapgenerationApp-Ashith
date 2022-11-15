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
    this.propertyPanelServiceHandler.invokeDisablePropertyPanel$.subscribe(() =>
      this.DisablePropertyPanel()
    );
  }

  PropertyPanelValues: SetPropertiesModel = {
    StrokeWidth: 5,
    StrokeColor: '#9a3c3c',
    FillColor: '#9a3c3c',
    ObjectAngle: 0,
  };

  ChangedPropertyData: Property = {
    propertyName: '',
    PropertyValue: '',
  };

  ngOnInit(): void {}

  onStrokeColorChange(value: string) {
    this.PropertyPanelValues.StrokeColor = value;
    this.ChangedPropertyData.propertyName = 'stroke';
    this.ChangedPropertyData.PropertyValue = value;
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onStrokeWidthChange(value: string) {
    this.PropertyPanelValues.StrokeWidth = Number(value);
    this.ChangedPropertyData.propertyName = 'strokeWidth';
    this.ChangedPropertyData.PropertyValue = Number(value);
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onFillColorChange(value: string) {
    this.PropertyPanelValues.FillColor = value;
    this.ChangedPropertyData.propertyName = 'fill';
    this.ChangedPropertyData.PropertyValue = value;
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }
  onAngleChange(value: string) {
    this.PropertyPanelValues.ObjectAngle = Number(value);
    this.ChangedPropertyData.propertyName = 'angle';
    this.ChangedPropertyData.PropertyValue = Number(value);
    this.propertyPanelServiceHandler.onPropertyPanelChange(
      this.ChangedPropertyData
    );
  }

  DisablePropertyPanel() {
    this.isdisabled = true;
  }
  setPropertyPanelForSelectedObjects(ObjectProperties: SetPropertiesModel) {
    this.isdisabled = false;
    this.PropertyPanelValues.StrokeWidth = ObjectProperties.StrokeWidth;
    this.PropertyPanelValues.StrokeColor = ObjectProperties.StrokeColor;
    this.PropertyPanelValues.FillColor = ObjectProperties.FillColor;
    this.PropertyPanelValues.ObjectAngle = Math.trunc(
      ObjectProperties.ObjectAngle
    );
  }
}
