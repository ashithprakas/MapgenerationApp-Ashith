import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { CanvasServiceService } from '../services/canvas-service.service';
import { EventInspectorService } from '../services/eventInspector.service';
import { PropertiesPanelService } from '../services/properties-panel.service';
import { UndoCanvas, updateCanvas } from '../store/canvas.actions';
import { select, Store } from '@ngrx/store';
import { Property, SetPropertiesModel } from '../model/canvas-model';
import { Subscription } from 'rxjs';
import { canvasStateSelector } from '../store/canvas.selector';
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
  ) {
    this.eventState$ = this.store
      .pipe(select(canvasStateSelector))
      .subscribe((x) => {
        //console.log('store', x);
      });
  }
  private canvas: any;
  eventState$!: Subscription;

  canvasInitialize() {
    this.canvas = new fabric.Canvas('canvasArea');
    this.canvas.setWidth(document.body.scrollWidth);
    this.canvas.setHeight(document.body.scrollHeight);
    this.canvas.set('backgroundColor', '#808080');
    console.log('Canvas Initialized');
  }

  updateCanvasState(EventName: string) {
    this.store.dispatch(
      new updateCanvas({
        canvasState: JSON.stringify(this.canvas),
        canvasActionType: EventName,
        isUndoState: false,
      })
    );
  }
  undoAction() {
    this.store.dispatch(new UndoCanvas());
  }
  AddShapeToCanvas(ObjectToBeRendered: fabric.Object) {
    this.canvas.add(ObjectToBeRendered);
  }

  GetObjectType() {
    let ObjectType: string = this.canvas.getActiveObject().get('type');
    return ObjectType;
  }

  getSelectedObjectsProperties() {
    let NoOfObject: string = this.canvas.getActiveObjects().length;
    let Propeties: SetPropertiesModel = {
      disablePropertyPanel: true,
      StrokeWidth: '',
      StrokeColor: '',
      FillColor: '',
      ObjectAngle: '',
    };
    if (NoOfObject != '1') {
      this.PropertyPanelHandler.OnObjectSelected(Propeties);
    } else {
      Propeties = {
        disablePropertyPanel: false,
        StrokeWidth: this.canvas.getActiveObject().get('strokeWidth'),
        StrokeColor: this.canvas.getActiveObject().get('stroke'),
        FillColor: this.canvas.getActiveObject().get('fill'),
        ObjectAngle: Math.trunc(
          this.canvas.getActiveObject().get('angle')
        ).toString(),
      };
      this.PropertyPanelHandler.OnObjectSelected(Propeties);
    }
  }
  setSelectedObjectPropertyValuesFromPanel(ChangedPropertyData: Property) {
    this.canvas
      .getActiveObject()
      .set(ChangedPropertyData.propertyName, ChangedPropertyData.PropertyValue);

    this.canvas.renderAll();
    this.updateCanvasState('Property Change');
  }
  ngOnInit(): void {
    this.canvasInitialize();
    this.CanvasServiceHandler.invokeAddShapeToCanvasFuntion$.subscribe(
      (ObjectFromService) => this.AddShapeToCanvas(ObjectFromService)
    );
    this.PropertyPanelHandler.invokeSetObjectPropertyFromPanel$.subscribe(
      (Property) => this.setSelectedObjectPropertyValuesFromPanel(Property)
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
      this.getSelectedObjectsProperties();
    });
    this.canvas.on('object:modified', (e: any) => {
      this.updateCanvasState(e.action + ' event');
    });
  }
}
