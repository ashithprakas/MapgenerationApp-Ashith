import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas-model';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  CanvasMemory: Array<string> = Array<string>(10);
  index: number = 0;
  pushtoStack(Data: CanvasModel) {
    this.CanvasMemory[this.index++] = Data.canvasState;
    console.log(this.CanvasMemory);
  }
}
