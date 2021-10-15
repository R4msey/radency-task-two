import { PayloadAction } from '@reduxjs/toolkit'

type Status = 'active' | 'archived'
export type NotesList = INote[]
export type NoteId = number

interface IStatusPayload {
  id: NoteId
  status: Status
}

interface IEditNotePayload {
  name: string
  content: string
  dates: string
  category: string
}

export interface IInitialState {
  editId: number | null
  currentStatus: Status
}

export interface INote {
  id: NoteId
  name: string
  created: string
  category: string
  content: string
  dates: string
  status: Status
}

export type InitNotesActionPayloadType = PayloadAction<NotesList>
export type RemoveNoteActionPayloadType = PayloadAction<NoteId>
export type ChangeStatusActionPayloadType = PayloadAction<Status>
export type ChangeNoteStatusActionPayloadType = PayloadAction<IStatusPayload>
export type EditNoteActionPayloadType = PayloadAction<IEditNotePayload>
export type CreateNoteActionPayloadType = PayloadAction<INote>
