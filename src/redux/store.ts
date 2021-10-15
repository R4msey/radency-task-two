import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import notesSlice from './notes/notes.slice'
import modalSlice from './modal/modalSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    notes: notesSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
