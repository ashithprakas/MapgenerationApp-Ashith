import { createAction, props } from '@ngrx/store';

export const updateCanvas = createAction(
  '[Canvas] Update Canvas',
  props<{ canvasState: string; canvasActionType: string }>()
);
