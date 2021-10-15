import styled from 'styled-components'
import Icon from '@mdi/react'
import { FC } from 'hoist-non-react-statics/node_modules/@types/react'

const Container = styled.span`
  &:hover {
    cursor: pointer;
  }
`

interface IButtonIcon {
  icon: string
  onClick?: () => void
}

export const ButtonIcon: FC<IButtonIcon> = ({ icon, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon path={icon} size={1.2} />
    </Container>
  )
}
