import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from '../services/canvas-service.service';
import { EventInspectorService } from '../services/eventInspector.service';
import { PropertiesPanelService } from '../services/properties-panel.service';
import { updateCanvas } from '../store/canvas.actions';
import { Store } from '@ngrx/store';
import { SetPropertiesModel } from '../model/canvas-model';
@Component({
  selector: 'app-app-canvas',
  templateUrl: './app-canvas.component.html',
  styleUrls: ['./app-canvas.component.css'],
})
export class AppCanvasComponent implements OnInit {
  constructor(
    private CanvasServiceHandler: CanvasServiceService,
    private EventServiceHandler: EventInspectorService,
    private PropertyPanelHandler: PropertiesPanelService,
    private store: Store
  ) {}
  private canvas: any;
  canvasInitialize() {
    this.canvas = new fabric.Canvas('canvasArea');
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set('backgroundColor', '#808080');
    console.log('Canvas Initialized');
  }

  updateCanvasState(EventName: string) {
    this.store.dispatch(
      updateCanvas({
        canvasState: JSON.stringify(this.canvas),
        canvasActionType: EventName,
      })
    );
  }
  AddShapeToCanvas(ObjectToBeRendered: fabric.Object) {
    this.canvas.add(ObjectToBeRendered);
  }

  GetObjectType() {
    let ObjectType: string = this.canvas.getActiveObject().get('type');
    return ObjectType;
  }

  getSelectedObjectsProperties() {
    let objecttype = this.GetObjectType();
    console.log(this.canvas.getActiveObject().get('type'));

    if (objecttype == 'activeSelection') {
      this.PropertyPanelHandler.DisablePropertyPanel();
    } else {
      let Propeties: SetPropertiesModel = {
        StrokeWidth: this.canvas.getActiveObject().get('strokeWidth'),
        StrokeColor: this.canvas.getActiveObject().get('stroke'),
        FillColor: this.canvas.getActiveObject().get('fill'),
        ObjectAngle: this.canvas.getActiveObject().get('angle'),
      };
      this.PropertyPanelHandler.OnObjectSelected(Propeties);
    }
  }
  setSelectedObjectPropertyValuesFromPanel(Properties: SetPropertiesModel) {
    console.log(Properties);
    this.canvas.getActiveObject().set('strokeWidth', Properties.StrokeWidth);
    this.canvas.getActiveObject().set('fill', Properties.FillColor);
    this.canvas.getActiveObject().set('stroke', Properties.StrokeColor);
    this.canvas.getActiveObject().set('angle', Properties.ObjectAngle);
    this.canvas.renderAll();
  }
  ngOnInit(): void {
    this.canvasInitialize();
    this.CanvasServiceHandler.invokeAddShapeToCanvasFuntion$.subscribe(
      (ObjectFromService) => this.AddShapeToCanvas(ObjectFromService)
    );
    this.PropertyPanelHandler.invokeSetObjectPropertyFromPanel$.subscribe(
      (Properties) => this.setSelectedObjectPropertyValuesFromPanel(Properties)
    );

    this.canvas.on('object:added', () => {
      let ObjectName = this.CanvasServiceHandler.ObjectName;
      this.EventServiceHandler.addObjectEventMessage(
        ObjectName + ' Object Has Been Created Successfully!'
      );
      this.updateCanvasState('Add Event');
    });
    this.canvas.on('object:rotating', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Is Being Rotated',
        this.GetObjectType()
      );
      this.getSelectedObjectsProperties();
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
      this.canvas.getActiveObject();
    });

    this.canvas.on('selection:created', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Has Been Selected',
        this.GetObjectType()
      );
      this.getSelectedObjectsProperties();
    });
    this.canvas.on('selection:updated', () => {
      this.EventServiceHandler.addObjectEventMessage(
        'Object Has Been Selected',
        this.GetObjectType()
      );
      this.getSelectedObjectsProperties();
    });
    this.canvas.on('selection:cleared', () => {
      this.EventServiceHandler.addObjectEventMessage('No Object Is Selected');
      this.PropertyPanelHandler.DisablePropertyPanel();
    });
    this.canvas.on('object:modified', (e: any) => {
      this.updateCanvasState(e.action + ' event');
    });
  }
}
