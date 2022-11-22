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

    this.invokeUndoRedoButtonToggler.next(this.UndoRedoDisableState);
  }

  SaveStateToMemory(Data: CanvasModel) {
    if (Data.canvasState != undefined) {
      this.PushtoUndoStack(Data.canvasState);
      this.RedoCanvasMemory = [];

      this.CheckMemory();
    }
  }
  undoCanvasAction(currentState: CanvasModel) {
    this.PushToRedoStack(currentState.canvasState);
    if (this.UndoCanvasMemory.length >= 0) {
      let popedUndoState = this.UndoCanvasMemory.pop();
      this.CheckMemory();
      return popedUndoState;
    } else {
      return undefined;
    }
  }
  redoCanvasAction(previousState: CanvasModel) {
    if (this.RedoCanvasMemory.length >= 0) {
      let popedRedoState = this.RedoCanvasMemory.pop();
      this.PushtoUndoStack(previousState.canvasState);
      this.CheckMemory();
      return popedRedoState;
    } else {
      return undefined;
    }
  }

  PushtoUndoStack(State: string) {
    this.UndoCanvasMemory.push(State);
  }
  PushToRedoStack(State: string) {
    this.RedoCanvasMemory.push(State);
  }
}
