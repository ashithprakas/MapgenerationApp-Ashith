import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas-model';
import { AppState } from '../store/canvas.index';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  CanvasMemory: Array<string> = [];
  pushtoStack(Data: CanvasModel) {
    if (Data != undefined) this.CanvasMemory.push(Data.canvasState);
  }
  undoCanvasMemory() {
    return this.CanvasMemory.pop();
  }
}
