import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from '../services/canvas-service.service';
import { EventInspectorService } from '../services/eventInspector.service';

@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css'],
})
export class AppCanvasComponent implements OnInit {
  constructor(
    private CanvasServiceHandler: CanvasServiceService,
    private EventServiceHandler: EventInspectorService
  ) {}
  private canvas: any;
  canvasInitialize() {
    this.canvas = new fabric.Canvas('canvasArea');
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set('backgroundColor', 'grey');
    console.log('Canvas Initialized');
  }

  AddShapeToCanvas(ObjectToBeRendered: fabric.Object) {
    this.canvas.add(ObjectToBeRendered);
    let ObjectName = this.CanvasServiceHandler.ObjectName;
    this.EventServiceHandler.addObjectEventMessage(
      ObjectName + ' Object Has Been Created Successfully!'
    );
  }

  GetObjectType() {
    let ObjectType: string = this.canvas.getActiveObject().get('type');
    return ObjectType;
  }

  ngOnInit(): void {
    this.canvasInitialize();
    this.CanvasServiceHandler.invokeAddShapeToCanvasFuntion$.subscribe(
      (ObjectFromService) => this.AddShapeToCanvas(ObjectFromService)
    );

    this.canvas.on('object:rotating', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Is Being Rotated',
        this.GetObjectType()
      );
    });
    this.canvas.on('object:scaling', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Is Being Scaled',
        this.GetObjectType()
      );
    });
    this.canvas.on('object:moving', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Is Being Dragged',
        this.GetObjectType()
      );
    });
    this.canvas.on('object:skewing', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Is Being Skewd',
        this.GetObjectType()
      );
    });

    this.canvas.on('selection:created', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Has Been Selected',
        this.GetObjectType()
      );
    });
    this.canvas.on('selection:updated', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Has Been Selected',
        this.GetObjectType()
      );
    });
    this.canvas.on('selection:cleared', () => {
      this.EventServiceHandler.addObjectEventMessage('No Object Is Selected');
    });
  }
}
