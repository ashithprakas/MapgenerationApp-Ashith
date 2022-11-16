import { UndoRedoService } from '../services/undo-redo.service';
import { MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';
import { UPDATE_CANVAS, Actions, updateCanvas } from './canvas.actions';

export function undoRedoMetaReducer(
  undoRedoServiceHandler: UndoRedoService
): MetaReducer<CanvasModel, Actions> {
  function undoRedo(
    reducer: ActionReducer<CanvasModel, Actions>
  ): ActionReducer<CanvasModel, Actions> {
    return (state, action: Actions) => {
      let modifiedAction = action;
      switch (action.type) {
        case UPDATE_CANVAS:
          undoRedoServiceHandler.pushtoStack(action.payload);
      }
      return reducer(state, modifiedAction);
    };
  }
  return undoRedo;
}
