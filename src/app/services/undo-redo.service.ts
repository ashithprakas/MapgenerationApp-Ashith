import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CanvasModel, UndoRedoButtonToggleModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  UndoRedoDisableState: UndoRedoButtonToggleModel = {
    isUndoDisabled: true,
    isRedoDisabled: true,
  };
  UndoCanvasMemory: Array<string> = [];
  RedoCanvasMemory: Array<string> = [];
  invokeUndoRedoButtonToggler: Subject<UndoRedoButtonToggleModel> =
    new Subject();
  invokeUndoRedoButtonToggler$ =
    this.invokeUndoRedoButtonToggler.asObservable();

  CheckMemory() {
    console.log(this.UndoRedoDisableState);
    console.log(this.UndoCanvasMemory.length);

    if (this.UndoCanvasMemory.length > 0) {
      this.UndoRedoDisableState.isUndoDisabled = false;
    } else {
      this.UndoRedoDisableState.isUndoDisabled = true;
    }

    if (this.RedoCanvasMemory.length > 0) {
      this.UndoRedoDisableState.isRedoDisabled = false;
    } else {
      this.UndoRedoDisableState.isRedoDisabled = true;
    }

    console.log(this.UndoRedoDisableState);
    this.invokeUndoRedoButtonToggler.next(this.UndoRedoDisableState);
  }

  pushtoUndoArray(Data: CanvasModel) {
    if (Data.canvasState != undefined) {
      this.UndoCanvasMemory.push(Data.canvasState);
      this.RedoCanvasMemory = [];
      console.log('from push to undo array');
      this.CheckMemory();
    }
  }
  undoCanvasAction(currentState: CanvasModel) {
    this.RedoCanvasMemory.push(currentState.canvasState);

    if (this.UndoCanvasMemory.length >= 0) {
      let popedUndoState = this.UndoCanvasMemory.pop();
      this.CheckMemory();
      return popedUndoState;
    } else {
      return undefined;
    }
  }
  redoCanvasAction() {
    if (this.RedoCanvasMemory.length >= 0) {
      let popedRedoState = this.RedoCanvasMemory.pop();
      this.CheckMemory();
      return popedRedoState;
    } else {
      return undefined;
    }
  }
}
