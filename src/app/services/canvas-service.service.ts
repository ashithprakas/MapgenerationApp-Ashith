import { Injectable,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { fabric } from 'fabric';


@Injectable()
export class CanvasServiceService {

  invokeAddShapeTOCanvasFunction = new EventEmitter();
  subsVar?: Subscription;
  constructor() { }

  onObjectPanelButtonClick(ShapeName:string){
    var ObjectToBeRendered
    
    
    if(ShapeName == "rectangle"){
      ObjectToBeRendered = this.initializeRectangle()
    }
    else if(ShapeName == "circle"){
      ObjectToBeRendered = this.initializeCircle()
    }
    else if(ShapeName == "triangle"){
      ObjectToBeRendered = this.initializeTriangle();
    }
    this.invokeAddShapeTOCanvasFunction.emit(ObjectToBeRendered);
  }

  
  initializeRectangle(){
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      stroke:'black',
      strokeWidth:5,
      fill:'grey',
      width: 200,
      height: 100
    });
    return rect;
  }

  initializeCircle(){
    var circle = new fabric.Circle({
      left:100,
      top:100,
      stroke:'black',
      strokeWidth:5,
      radius:100,
      fill:'grey'

    });
    return circle;
  }

  initializeTriangle(){
    var triangle = new fabric.Triangle({
      left:100,
      top:100,
      stroke:'black',
      fill:'grey',
      strokeWidth:5,
      height:100,

    });
    return triangle;
  }



}
