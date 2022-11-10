import { createReducer, on } from '@ngrx/store';
import { updateCanvas } from './canvas.actions';
import { fabric } from 'fabric';
import { CanvasModel } from '../model/canvas-model';

const initialState: CanvasModel = {
  canvasState: JSON.stringify(fabric.Canvas),
  canvasActionType: 'initialize',
};

export const canvasReducer = createReducer(
  initialState,
  on(updateCanvas, (Currentstate, CanvasState) => (Currentstate = CanvasState))
);
