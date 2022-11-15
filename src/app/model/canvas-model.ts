export interface CanvasModel {
  canvasState: string;
  canvasActionType: string;
}

export interface SetPropertiesModel {
  disablePropertyPanel: boolean;
  StrokeWidth: string;
  StrokeColor: string;
  FillColor: string;
  ObjectAngle: string;
}

export interface Property {
  propertyName: string;
  PropertyValue: string | Number;
}
