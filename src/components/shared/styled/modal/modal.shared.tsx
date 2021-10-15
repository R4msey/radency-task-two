import { FormEvent } from 'hoist-non-react-statics/node_modules/@types/react'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../hooks/useRedux'
import { closeModal } from '../../../../redux/modal/modalSlice'
import {
  createNote,
  editNote,
  setEditNoteId,
} from '../../../../redux/notes/notes.slice'
import { selectNoteById } from '../../../../redux/notes/selectors'
import { optionsData } from '../../../../utils/data'
import { Box, Container, ContainerInput, ContainerTitle } from './modal.styled'

export const Modal = () => {
  const note = useAppSelector((state) =>
    selectNoteById(state, state.notes.editId!)
  )
  const [inputName, setInputName] = useState(note?.name || '')
  const [inputContent, setInputContent] = useState(note?.content || '')
  const [inputDates, setInputDates] = useState(note?.dates || '')
  const [inputCategory, setInputCategory] = useState(note?.category || 'Task')

  const dispatch = useDispatch()

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (note) {
      dispatch(
        editNote({
          name: inputName,
          content: inputContent,
          dates: inputDates,
          category: inputCategory,
        })
      )
      dispatch(setEditNoteId(null))
    } else {
      dispatch(
        createNote({
          name: inputName,
          content: inputContent,
          dates: inputDates,
          id: Date.now(),
          status: 'active',
          created: new Date().toLocaleString('en-us', {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
          }),
          category: inputCategory,
        })
      )
    }
    dispatch(closeModal())
  }

  const inputs = [
    {
      title: 'Name',
      state: inputName,
      setState: setInputName,
    },
    {
      title: 'Content',
      state: inputContent,
      setState: setInputContent,
    },
    {
      title: 'Dates',
      state: inputDates,
      setState: setInputDates,
    },
  ]

  return (
    <Container>
      <Box>
        <ContainerTitle>
          <h1>{note ? 'Change Note' : 'Create Note'}</h1>
          <button
            onClick={() => {
              dispatch(setEditNoteId(null))
              dispatch(closeModal())
            }}
          >
            X
          </button>
        </ContainerTitle>
        <form action='' onSubmit={onSubmit}>
          {inputs.map((input, index) => (
            <ContainerInput key={index}>
              <span>{input.title}</span>
              <input
                type='text'
                onChange={(event) => input.setState(event.target.value)}
                value={input.state}
              />
            </ContainerInput>
          ))}
          <ContainerInput>
            <span>Categories</span>
            <select
              value={inputCategory}
              onChange={(event) => setInputCategory(event.target.value)}
              name='select'
            >
              {optionsData.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </ContainerInput>
          <button type='submit'>Save</button>
        </form>
      </Box>
    </Container>
  )
}
