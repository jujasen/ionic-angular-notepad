import { Action } from "@ngrx/store";
import { Note } from "../interfaces/note";

//Declare action types
export enum ActionTypes {
    CreateNote = "[Notes Service] Create note",
    DeleteNote = "[Notes Service] Delete note",
    UpdateNote = "[Notes Service] Update note",
}

//Create CreateNote action
export class CreateNote implements Action {
    readonly type = ActionTypes.CreateNote;
    constructor(public payload: { note: Note }) {}
}

//Create CreateNote action
export class UpdateNote implements Action {
    readonly type = ActionTypes.UpdateNote;
    constructor(public payload: { note: Note }) {}
}

//Create DeleteNote action
export class DeleteNote implements Action {
    readonly type = ActionTypes.DeleteNote;
    constructor(public payload: { note: Note }) {}
}

//Export all actions
export type ActionsUnion = CreateNote | DeleteNote | UpdateNote;
