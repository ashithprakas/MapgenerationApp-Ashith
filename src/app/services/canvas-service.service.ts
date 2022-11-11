import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { fabric } from 'fabric';

@Injectable()
export class CanvasServiceService {
  ObjectName: string = '';
  invokeAddShapeTOCanvasFunction: Subject<fabric.Object> = new Subject();
  invokeAddShapeToCanvasFuntion$ =
    this.invokeAddShapeTOCanvasFunction.asObservable();

  onObjectPanelButtonClick(ShapeName: string) {
    let ObjectToBeRendered: fabric.Circle | fabric.Rect | fabric.Triangle;
    if (ShapeName == 'rectangle') {
      ObjectToBeRendered = this.initializeRectangle();
    } else if (ShapeName == 'circle') {
      ObjectToBeRendered = this.initializeCircle();
    } else {
      ObjectToBeRendered = this.initializeTriangle(); //initialize triangle model if it is neither rectangle nor circle
    }
    this.invokeAddShapeTOCanvasFunction.next(ObjectToBeRendered);
  }

  initializeRectangle() {
    let rect = new fabric.Rect({
      left: 100,
      top: 100,
      stroke: '#000000',
      strokeWidth: 5,
      fill: '#808080',
      width: 200,
      height: 100,
    });
    this.ObjectName = 'Rectangle ';
    return rect;
  }

  initializeCircle() {
    let circle = new fabric.Circle({
      left: 100,
      top: 100,
      stroke: '#000000',
      strokeWidth: 5,
      radius: 100,
      fill: '#808080',
    });
    this.ObjectName = 'Circle ';
    return circle;
  }

  initializeTriangle() {
    let triangle = new fabric.Triangle({
      left: 100,
      top: 100,
      stroke: '#000000',
      fill: '#808080',
      strokeWidth: 5,
      height: 100,
    });
    this.ObjectName = 'Triangle ';
    return triangle;
  }
}
