import { UndoRedoService } from '../services/undo-redo.service';
import { MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';
import {
  UPDATE_CANVAS,
  Actions,
  UNDO_CANVAS,
  UndoCanvasAction,
  REDO_CANVAS,
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
          isUndoRedoState: false,
        },
      };
      switch (action.type) {
        case UPDATE_CANVAS:
          if (state != undefined)
            undoRedoServiceHandler.SaveStateToMemory(state.CanvasData);
          modifiedAction.type = UPDATE_CANVAS;
          modifiedAction.payload.canvasActionType =
            action.payload.canvasActionType;
          modifiedAction.payload.canvasState = action.payload.canvasState;
          modifiedAction.payload.isUndoRedoState = false;
          break;
        case UNDO_CANVAS:
          let previousState = undoRedoServiceHandler.undoCanvasAction(
            action.payload
          );
          if (previousState != undefined) {
            modifiedAction.type = UNDO_CANVAS;
            modifiedAction.payload.canvasActionType = 'undo Event';
            modifiedAction.payload.canvasState = previousState!;
            modifiedAction.payload.isUndoRedoState = true;
          }

          break;
        case REDO_CANVAS:
          let redoState = undoRedoServiceHandler.redoCanvasAction(
            state!.CanvasData
          );
          if (redoState != undefined) {
            modifiedAction.type = REDO_CANVAS;
            modifiedAction.payload.canvasActionType = 'redo Event';
            modifiedAction.payload.canvasState = redoState!;
            modifiedAction.payload.isUndoRedoState = true;
          }
      }
      return reducer(state, modifiedAction);
    };
  }
  return undoRedo;
}
