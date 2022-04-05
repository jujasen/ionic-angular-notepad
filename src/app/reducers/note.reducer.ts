import * as fromNote from '../actions/note.actions';
import { Note } from '../interfaces/note';

//import Note interface to see what a note looks like
export interface NoteState {
    data: Note[];
}

//Set the initialState to an empty array
export const initialState: NoteState = {
    data: [],
};

// Create the note reducer, set the initial state, import the actions, and tell it what to do with the actions, as well as a default state
export function reducer(
    state = initialState,
    action: fromNote.ActionsUnion
): NoteState {
    switch (action.type) {
    case fromNote.ActionTypes.CreateNote: {
        return {
        ...state,
        data: [...state.data, action.payload.note],
        };
    }
    case fromNote.ActionTypes.DeleteNote: {
    return {
        ...state,
        ...state.data.filter(note => action.payload.note.id !== note.id)
    };
    }
    case fromNote.ActionTypes.UpdateNote: {
        return {
            ...state,
            ...state.data.map(note => action.payload.note.id === note.id ? action.payload.note : note)
        }
    };
    default: {
        return state;
    }
}
}

//Create functions that we will use to select the notes or an individual note
export const getNotes = (state: NoteState) => state.data;
export const getNoteById = (state: NoteState, props: { id: string }) => state.data.find((note) => note.id === props.id);