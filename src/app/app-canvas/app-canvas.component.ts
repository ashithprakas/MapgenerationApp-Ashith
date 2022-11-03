import { Component, OnInit} from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from '../services/canvas-service.service';

@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css']
})
export class AppCanvasComponent implements OnInit{

  constructor(private CanvasServiceHandler:CanvasServiceService) { }
  private canvas:any;
  canvasInitialize(){
    this.canvas = new fabric.Canvas('canvasArea')
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set( 'backgroundColor' ,'grey')
    console.log("Canvas Initialized");
  }

  AddShapeToCanvas(ObjectToBeRendered:fabric.Object){
    this.canvas.add(ObjectToBeRendered);
  }

  ngOnInit(): void {
    this.canvasInitialize();
    this.CanvasServiceHandler.invokeAddShapeToCanvasFuntion$.subscribe((ObjectFromService)=>this.AddShapeToCanvas(ObjectFromService))
  }
}
