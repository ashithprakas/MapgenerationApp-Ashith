import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';

export const getCanvas = createFeatureSelector<CanvasModel>('CanvasData');

export const canvasStateSelector = createSelector(
  getCanvas,
  (CanvasState: CanvasModel) => {
    return CanvasState;
  }
);

export const undoCanvas = createSelector(
  getCanvas,
  (CanvasState: CanvasModel) => {
    if (CanvasState.isUndoRedoState) {
      return CanvasState.canvasState;
    } else {
      return null;
    }
  }
);
