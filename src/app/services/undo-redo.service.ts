import { Injectable } from '@angular/core';
import { CanvasModel } from '../model/canvas-model';
import { AppState } from '../store/canvas.index';

@Injectable({
  providedIn: 'root',
})
export class UndoRedoService {
  constructor() {}

  CanvasMemory: Array<AppState> = [];
  pushtoStack(Data: any) {
    let jsonedata = JSON.parse(
      JSON.stringify(Data.CanvasData.canvasActionType)
    );
    console.log('this is data ', Data.CanvasData.canvasState);
    console.log('this is data state ', jsonedata.canvasActionType);
    //this.CanvasMemory.push(Data);
  }
  undoCanvasMemory() {
    return this.CanvasMemory.pop();
  }
}
