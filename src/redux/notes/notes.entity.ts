import { createEntityAdapter } from '@reduxjs/toolkit'
import { IInitialState, INote } from './types'

export const notesEntity = createEntityAdapter<INote>({
  selectId: (note) => note.id,
})

export const initialState = notesEntity.getInitialState<IInitialState>({
  editId: null,
  currentStatus: 'active',
})
