import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  CanvasMemory: Array<string> = [];
  pushtoStack(Data: CanvasModel) {
    if (Data != undefined) this.CanvasMemory.push(Data.canvasState);
    console.log(this.CanvasMemory);
  }
  undoCanvasMemory() {
    console.log('undo', this.CanvasMemory);
    return this.CanvasMemory.pop();
  }
}
