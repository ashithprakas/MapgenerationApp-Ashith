import { Injectable } from '@angular/core';
import { Canvas } from 'fabric/fabric-impl';
import { CanvasModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  UndoCanvasMemory: Array<string> = [];
  RedoCanvasMemory: Array<string> = [];

  pushtoUndoArray(Data: CanvasModel) {
    if (Data != undefined) this.UndoCanvasMemory.push(Data.canvasState);
  }
  undoCanvasAction(currentState: CanvasModel) {
    this.RedoCanvasMemory.push(currentState.canvasState);
    let undoState: string = this.UndoCanvasMemory.pop()!;
    console.log(
      'undo memory ',
      this.UndoCanvasMemory,
      'redo memory ',
      this.RedoCanvasMemory
    );
    return undoState;
  }
  redoCanvasAction() {
    console.log;
    return this.RedoCanvasMemory.pop();
  }
}
