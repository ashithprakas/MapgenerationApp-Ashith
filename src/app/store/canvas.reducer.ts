import * as CanvasAction from './canvas.actions';
import { fabric } from 'fabric';
import { CanvasModel } from '../model/canvas-model';

const initialState: CanvasModel = {
  canvasState: JSON.stringify(fabric.Canvas),
  canvasActionType: 'initialize',
  isUndoRedoState: false,
};

export function reducer(
  state: CanvasModel = initialState,
  action: CanvasAction.Actions
) {
  switch (action.type) {
    case CanvasAction.UPDATE_CANVAS:
      const payload = action.payload;

      return { ...state, ...payload };
    case CanvasAction.UNDO_CANVAS:
      return {
        ...state,
        ...action.payload,
      };
    case CanvasAction.REDO_CANVAS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
