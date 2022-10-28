import { Injectable } from '@angular/core';
import { fabric } from 'fabric'


@Injectable()
export class CanvasServiceService {

  constructor() { }
  private canvas:any;

  canvasInitialize(newcanvas:HTMLCanvasElement){
    this.canvas = new fabric.Canvas(newcanvas)
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set( 'backgroundColor' ,'grey')
    console.log("Canvas Initialized");
  }

  addRectangleToCanvas(){
  var rect = new fabric.Rect({
    left: 100,
    top: 100,
    stroke:'black',
    strokeWidth:5,
    fill:'grey',
    width: 200,
    height: 100
  });
  this.canvas.add(rect);
  }

  addCircleToCanvas(){
    var circle = new fabric.Circle({
      left:100,
      top:100,
      stroke:'black',
      strokeWidth:5,
      radius:100,
      fill:'grey'

    });
    this.canvas.add(circle);
  }

  addTriangleToCanvas(){
    var triangle = new fabric.Triangle({
      left:100,
      top:100,
      stroke:'black',
      fill:'grey',
      strokeWidth:5,
      height:100,
      
    })
    this.canvas.add(triangle);
  }
}
