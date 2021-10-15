import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { useCalcCategory } from './hooks/useCalculatorCategory'
import { useAppSelector } from './hooks/useRedux'

import { openModal } from './redux/modal/modalSlice'
import { initNotes } from './redux/notes/notes.slice'
import { selectAllNotes } from './redux/notes/selectors'

import { Modal } from './components/shared/styled/modal/modal.shared'
import {
  List,
  ListBody,
  ListBodyCategory,
  ListHead,
  ListHeadCategroy,
} from './components/shared/styled/tables/table.shared'

import { data } from './utils/data'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initNotes(data))
  }, [])
  const notes = useAppSelector(selectAllNotes)
  const { currentStatus } = useAppSelector((state) => state.notes)
  const { visible } = useAppSelector((state) => state.modal)

  const { calcStats } = useCalcCategory()
  return (
    <div className='App'>
      <List THead={<ListHead />}>
        {notes
          .filter((i) => i.status === currentStatus)
          .map((note) => (
            <ListBody key={note.id} note={note} />
          ))}
      </List>
      <div style={{ display: 'flex', justifyContent: 'end', marginBottom: 30 }}>
        <button
          onClick={() => {
            dispatch(openModal())
          }}
        >
          Create Note
        </button>
      </div>
      <List THead={<ListHeadCategroy />}>
        {calcStats().map((note: any, index) => (
          <ListBodyCategory key={index} note={note} />
        ))}
      </List>
      {visible && <Modal />}
    </div>
  )
}

export default App
