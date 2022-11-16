import { createReducer, on } from '@ngrx/store';
import * as CanvasAction from './canvas.actions';
import { fabric } from 'fabric';
import { CanvasModel } from '../model/canvas-model';
import { UndoRedoService } from '../services/undo-redo.service';

const initialState: CanvasModel = {
  canvasState: JSON.stringify(fabric.Canvas),
  canvasActionType: 'initialize',
};

export function reducer(state = initialState, action: CanvasAction.Actions) {
  switch (action.type) {
    case CanvasAction.UPDATE_CANVAS:
      const payload = action.payload;
      return { ...state, ...payload };

    default:
      return state;
  }
}

// export function undoRedoMetaReducer(
//   undoRedoServiceHandler: UndoRedoService
// ): MetaReducer<any> {
//   function undoRedo(
//     reducer: ActionReducer<CanvasModel, Action>
//   ): ActionReducer<CanvasModel, Action> {
//     return (state, action: Action) => {
//       let modifiedAction: CanvasAction = action;

//       switch (action.type) {
//         case '[Canvas] Update Canvas':
//           console.log('update case');
//           console.log(action.canvasState);
//       }
//       return reducer(state, modifiedAction);
//     };
//   }
//   return undoRedo;
// }
