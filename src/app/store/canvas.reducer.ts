import * as CanvasAction from './canvas.actions';
import { fabric } from 'fabric';
import { CanvasModel } from '../model/canvas-model';

const initialState: CanvasModel = {
  canvasState: JSON.stringify(fabric.Canvas),
  canvasActionType: 'initialize',
  isUndoState: false,
};

export function reducer(
  state: CanvasModel = initialState,
  action: CanvasAction.Actions
) {
  switch (action.type) {
    case CanvasAction.UPDATE_CANVAS:
      const payload = action.payload;
      console.log(action);
      return { ...state, ...payload };
    case CanvasAction.UNDO_CANVAS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
