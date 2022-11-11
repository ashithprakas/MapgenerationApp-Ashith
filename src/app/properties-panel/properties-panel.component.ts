import { Component, OnInit } from '@angular/core';
import { PropertiesPanelService } from '../services/properties-panel.service';
import { SetPropertiesModel } from '../model/canvas-model';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrls: ['./properties-panel.component.css'],
})
export class PropertiesPanelComponent implements OnInit {
  constructor(private propertyPanelServiceHandler: PropertiesPanelService) {
    this.propertyPanelServiceHandler.invokeSetObjectPanelProperty$.subscribe(
      (Properties) => this.setPropertyPanelForSelectedObjects(Properties)
    );
  }

  PropertyPanelValues: SetPropertiesModel = {
    StrokeWidth: '5',
    StrokeColor: '#9a3c3c',
    FillColor: '#9a3c3c',
    ObjectAngle: '0',
  };

  ngOnInit(): void {}

  showCurrentProperties() {
    console.log(this.PropertyPanelValues);
  }
  onStrokeColorChange(value: string) {
    this.PropertyPanelValues.StrokeColor = value;
    this.showCurrentProperties();
  }
  onStrokeWidthChange(value: string) {
    this.PropertyPanelValues.StrokeWidth = value;
    this.showCurrentProperties();
  }
  onFillColorChange(value: string) {
    this.PropertyPanelValues.FillColor = value;
    this.showCurrentProperties();
  }
  onAngleChange(value: string) {
    this.PropertyPanelValues.ObjectAngle = value;
    this.showCurrentProperties();
  }

  setPropertyPanelForSelectedObjects(ObjectProperties: SetPropertiesModel) {
    this.PropertyPanelValues.StrokeWidth = ObjectProperties.StrokeWidth;
    this.PropertyPanelValues.StrokeColor = ObjectProperties.StrokeColor;
    this.PropertyPanelValues.FillColor = ObjectProperties.FillColor;
    this.PropertyPanelValues.ObjectAngle = ObjectProperties.ObjectAngle;
    console.log(this.PropertyPanelValues);
  }
}
