import { Action } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';

// export const updateCanvas = createAction(
//   '[Canvas] Update Canvas',
//   props<{ canvasState: string; canvasActionType: string }>()
// );

export const UPDATE_CANVAS = '[Canvas] Update Canvas';
export const UNDO_CANVAS = '[Canvas] Undo Canvas';

export class updateCanvas implements Action {
  readonly type = UPDATE_CANVAS;

  constructor(public payload: CanvasModel) {}
}

export type Actions = updateCanvas;
