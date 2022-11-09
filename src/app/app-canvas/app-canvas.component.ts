import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from '../services/canvas-service.service';
import { EventInspectorService } from '../services/eventInspector.service';
import { updateCanvas } from '../store/canvas.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css'],
})
export class AppCanvasComponent implements OnInit {
  constructor(
    private CanvasServiceHandler: CanvasServiceService,
    private EventServiceHandler: EventInspectorService,
    private store: Store
  ) {}
  private canvas: any;
  canvasInitialize() {
    this.canvas = new fabric.Canvas('canvasArea');
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set('backgroundColor', 'grey');
    console.log('Canvas Initialized');
  }

  updateCanvasState() {
    this.store.dispatch(
      updateCanvas({ canvasState: JSON.stringify(this.canvas) })
    );
  }
  AddShapeToCanvas(ObjectToBeRendered: fabric.Object) {
    this.canvas.add(ObjectToBeRendered);
    this.updateCanvasState();
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

    this.canvas.on('object:added', () => {
      let ObjectName = this.CanvasServiceHandler.ObjectName;
      this.EventServiceHandler.addObjectEventMessage(
        ObjectName + ' Object Has Been Created Successfully!'
      );
    });
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
        'Object Is Being Skewed',
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
