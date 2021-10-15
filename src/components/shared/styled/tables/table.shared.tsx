import { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { mdiPackageDown, mdiDelete, mdiPencil } from '@mdi/js'

import {
  changeNoteStatus,
  setEditNoteId,
  removeNote,
  changeStatus,
} from '../../../../redux/notes/notes.slice'
import { INote } from '../../../../redux/notes/types'
import { openModal } from '../../../../redux/modal/modalSlice'

import { Avatar } from '../avatar/avatar'
import { Row, Table, Td, Th } from './table.styled'
import { ButtonIcon } from '../buttons/buttonIcon'
import { optionsData } from '../../../../utils/data'

interface IList {
  THead?: ReactNode
}
export const List: FC<IList> = ({ children, THead }) => {
  return (
    <Table>
      <thead>{THead}</thead>
      <tbody>{children}</tbody>
    </Table>
  )
}

export const ListHead = () => {
  const dispatch = useDispatch()
  return (
    <Row color='#999' br>
      <Th style={{ width: 45 }}></Th>
      <Th>Name</Th>
      <Th>Created</Th>
      <Th>Category</Th>
      <Th>Content</Th>
      <Th>Dates</Th>
      <Th>
        <ButtonIcon
          icon={mdiPackageDown}
          onClick={() => {
            dispatch(changeStatus())
          }}
        />
        <ButtonIcon icon={mdiDelete} />
      </Th>
    </Row>
  )
}

interface IListBody {
  note: INote
}

export const ListBody: FC<IListBody> = ({ note }) => {
  const dispatch = useDispatch()
  return (
    <Row>
      <Td width='45px'>
        <Avatar
          icon={
            optionsData.filter((option) => option.name === note.category)[0]
              .avatar
          }
        />
      </Td>
      <Td text>{note.name}</Td>
      <Td>{note.created}</Td>
      <Td>{note.category}</Td>
      <Td>{note.content}</Td>
      <Td>{note.dates}</Td>
      <Td>
        <ButtonIcon
          icon={mdiPencil}
          onClick={() => {
            dispatch(setEditNoteId(note.id))
            dispatch(openModal())
          }}
        />
        <ButtonIcon
          icon={mdiPackageDown}
          onClick={() =>
            dispatch(
              changeNoteStatus({
                id: note.id,
                status: note.status === 'active' ? 'archived' : 'active',
              })
            )
          }
        />
        <ButtonIcon
          icon={mdiDelete}
          onClick={() => dispatch(removeNote(note.id))}
        />
      </Td>
    </Row>
  )
}

export const ListHeadCategroy = () => {
  return (
    <Row color='#999999' br>
      <Th style={{ width: 45 }}></Th>
      <Th>Note Category</Th>
      <Th>Active</Th>
      <Th>Archived</Th>
      <Th></Th>
    </Row>
  )
}

interface IListBodyCategory {
  note: { category: string; active: string; archived: string }
}
export const ListBodyCategory: FC<IListBodyCategory> = ({ note }) => {
  return (
    <Row>
      <Td width='45px'>
        <Avatar
          icon={
            optionsData.filter((option) => option.name === note.category)[0]
              .avatar
          }
        />
      </Td>
      <Td text>{note.category}</Td>
      <Td>{note.active || 0}</Td>
      <Td>{note.archived || 0}</Td>
      <Td></Td>
    </Row>
  )
}
