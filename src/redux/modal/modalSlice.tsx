import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  visible: boolean
}

const initialState: IInitialState = {
  visible: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.visible = true
    },
    closeModal: (state) => {
      state.visible = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
