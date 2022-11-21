import { Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';

// export const updateCanvas = createAction(
//   '[Canvas] Update Canvas',
//   props<{ canvasState: string; canvasActionType: string }>()
// );

export const UPDATE_CANVAS = '[Canvas] Update Canvas';
export const UNDO_CANVAS = '[Canvas] Undo Canvas';
export const REDO_CANVAS = '[Canvas] Redo Canvas';

export class updateCanvas implements Action {
  type = UPDATE_CANVAS;

  constructor(public payload: CanvasModel) {}
}
export class UndoCanvas implements Action {
  type = UNDO_CANVAS;

  constructor(public payload: CanvasModel) {}
}
export class RedoCanvas implements Action {
  type = REDO_CANVAS;
  constructor(
    public payload: CanvasModel = {
      canvasState: '',
      canvasActionType: '',
      isUndoRedoState: true,
    }
  ) {}
}
export class UndoCanvasAction implements Action {
  type = UPDATE_CANVAS;

  constructor(public payload: CanvasModel) {}
}

export type Actions = updateCanvas | UndoCanvas | UndoCanvasAction;
