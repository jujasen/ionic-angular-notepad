import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
//import the note reducer and call it "fromNote"
import * as fromNote from './note.reducer';

//Set the overall app state. Could also add more reducers here for different parts of the app. For example auth reducer, incident reducer, etc.
export interface AppState {
  notes: fromNote.NoteState;
}

//Export the reducer declared above so that app.module.ts can access it in StoreModule.forRoot()
export const reducers: ActionReducerMap<AppState> = {
  notes: fromNote.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];


//Create selectors for the notes and individual notes from the functions created in note.reducer.ts
export const getNoteState = (state: AppState) => state.notes;
export const getAllNotes = createSelector(getNoteState, fromNote.getNotes);
export const getNoteById = createSelector(getNoteState, fromNote.getNoteById);