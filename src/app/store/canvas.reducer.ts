import { createReducer, on } from '@ngrx/store';
import { updateCanvas } from './canvas.actions';
import { fabric } from 'fabric';

export const initialState = JSON.stringify(new fabric.Canvas('canvasArea'));

export const canvasReducer = createReducer(
  initialState,
  on(updateCanvas, (state) => (state = state))
);
