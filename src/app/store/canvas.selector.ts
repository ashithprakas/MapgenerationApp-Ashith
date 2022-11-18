import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';

export const getCanvasState = createFeatureSelector<CanvasModel>('CanvasData');

export const canvasStateSelector = createSelector(
  getCanvasState,
  (CanvasState: CanvasModel) => {
    return CanvasState;
  }
);
