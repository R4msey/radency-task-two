import { createSlice } from '@reduxjs/toolkit'
import { initialState, notesEntity } from './notes.entity'
import {
  ChangeNoteStatusActionPayloadType,
  CreateNoteActionPayloadType,
  EditNoteActionPayloadType,
  InitNotesActionPayloadType,
  RemoveNoteActionPayloadType,
} from './types'

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    initNotes: (state, action: InitNotesActionPayloadType) => {
      notesEntity.setAll(state, action.payload)
    },
    removeNote: (state, action: RemoveNoteActionPayloadType) => {
      notesEntity.removeOne(state, action.payload)
    },
    changeNoteStatus: (state, action: ChangeNoteStatusActionPayloadType) => {
      notesEntity.updateOne(state, {
        id: action.payload.id,
        changes: { status: action.payload.status },
      })
    },
    setEditNoteId: (state, action) => {
      state.editId = action.payload
    },
    changeStatus: (state) => {
      state.currentStatus =
        state.currentStatus === 'active' ? 'archived' : 'active'
    },
    editNote: (state, action: EditNoteActionPayloadType) => {
      notesEntity.updateOne(state, {
        id: state.editId!,
        changes: { ...action.payload },
      })
    },
    createNote: (state, action: CreateNoteActionPayloadType) => {
      notesEntity.addOne(state, action.payload)
    },
  },
})

export const {
  initNotes,
  removeNote,
  changeNoteStatus,
  setEditNoteId,
  editNote,
  createNote,
  changeStatus,
} = notesSlice.actions

export default notesSlice.reducer
