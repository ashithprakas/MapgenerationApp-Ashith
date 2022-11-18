import { UndoRedoService } from '../services/undo-redo.service';
import { MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';
import {
  UPDATE_CANVAS,
  Actions,
  UNDO_CANVAS,
  UndoCanvasAction,
} from './canvas.actions';
import { AppState } from './canvas.index';

export function undoRedoMetaReducer(
  undoRedoServiceHandler: UndoRedoService
): MetaReducer<AppState, Actions> {
  function undoRedo(
    reducer: ActionReducer<AppState, Actions>
  ): ActionReducer<AppState, Actions> {
    return (state, action: Actions) => {
      let modifiedAction: Actions = {
        type: '',
        payload: {
          canvasActionType: '',
          canvasState: '',
          isUndoState: false,
        },
      };
      switch (action.type) {
        case UPDATE_CANVAS:
          if (state != undefined)
            undoRedoServiceHandler.pushtoStack(state.CanvasData);
          modifiedAction.type = UPDATE_CANVAS;
          modifiedAction.payload.canvasActionType =
            action.payload.canvasActionType;
          modifiedAction.payload.canvasState = action.payload.canvasState;
          modifiedAction.payload.isUndoState = false;
          break;
        case UNDO_CANVAS:
          let previousState = undoRedoServiceHandler.undoCanvasMemory();
          modifiedAction.type = UNDO_CANVAS;
          modifiedAction.payload.canvasActionType = 'undo Event';
          modifiedAction.payload.canvasState = previousState!;
          modifiedAction.payload.isUndoState = true;
      }
      return reducer(state, modifiedAction);
    };
  }
  return undoRedo;
}
