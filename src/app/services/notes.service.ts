import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Storage } from "@ionic/storage";
import { Observable } from "rxjs";
import { Note } from "../interfaces/note";
import * as NoteActions from "../actions/note.actions";
import { AppState, getAllNotes, getNoteById } from "../reducers";


@Injectable({
  providedIn: "root"
})
export class NotesService {
  public notes: Observable<Note[]>;

  // select all notes with the store selector
  constructor(private storage: Storage, private store: Store<AppState>) {
    this.notes = this.store.select(getAllNotes);
  }

  // get a single note with the store seletor. Returns observable which will update any time the store changes
  getNote(id: string): Observable<Note> {
    return this.store.select(getNoteById, {
      id: id
    });
  }

  //use action to create Note
  createNote(title): void {
    //create id for note
    let id = Math.random()
      .toString(36)
      .substring(7);

    //create note object
    let note = {
      id: id.toString(),
      title: title,
      content: ""
    };

    //dispatch action to create note
    this.store.dispatch(new NoteActions.CreateNote({ note: note }));
  }

  save(note): void {
    this.store.dispatch(new NoteActions.UpdateNote({ note: note }));
  }

  //use action to delete note
  deleteNote(note): void {
    this.store.dispatch(new NoteActions.DeleteNote({ note: note }));
  }
}