import { ActionReducerMap } from '@ngrx/store';
import { CanvasModel } from '../model/canvas-model';
import { reducer } from './canvas.reducer';

export const rootReducer = {};
export interface AppState {
  CanvasData: CanvasModel;
}
export const reducers: ActionReducerMap<AppState, any> = {
  CanvasData: reducer,
};
