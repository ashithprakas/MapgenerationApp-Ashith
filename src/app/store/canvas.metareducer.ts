import { UndoRedoService } from '../services/undo-redo.service';
import { MetaReducer, ActionReducer, Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';
import { UPDATE_CANVAS, Actions, UNDO_CANVAS } from './canvas.actions';
import { Canvas } from 'fabric/fabric-impl';

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
          if (state != undefined) undoRedoServiceHandler.pushtoStack(state);
          break;
        case UNDO_CANVAS:
          let previousState = undoRedoServiceHandler.undoCanvasMemory();
          console.log(previousState);
        //state = previousState;
      }
      return reducer(state, modifiedAction);
    };
  }
  return undoRedo;
}
