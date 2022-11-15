export interface CanvasModel {
  canvasState: string;
  canvasActionType: string;
}

export interface SetPropertiesModel {
  disablePropertyPanel: boolean;
  StrokeWidth: number;
  StrokeColor: string;
  FillColor: string;
  ObjectAngle: number;
}

export interface Property {
  propertyName: string;
  PropertyValue: string | Number;
}
