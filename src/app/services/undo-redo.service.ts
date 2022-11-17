import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  CanvasMemory: Array<CanvasModel> = [];
  pushtoStack(Data: CanvasModel) {
    this.CanvasMemory.push(Data);
    console.log(this.CanvasMemory);
  }
  undoCanvasMemory() {
    return this.CanvasMemory.pop();
  }
}
