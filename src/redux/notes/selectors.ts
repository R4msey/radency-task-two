import { RootState } from '../store'
import { notesEntity } from './notes.entity'

export const { selectAll: selectAllNotes, selectById: selectNoteById } =
  notesEntity.getSelectors((state: RootState) => state.notes)
