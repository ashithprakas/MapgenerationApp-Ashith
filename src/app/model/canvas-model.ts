export interface CanvasModel {
  canvasState: string;
  canvasActionType: string;
  isUndoState: boolean;
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
