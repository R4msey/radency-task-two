import { FC } from 'react'
import Icon from '@mdi/react'
import styled from 'styled-components'
const Container = styled.div`
  width: 45px;
  height: 45px;
  background-color: #606161;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface IAvatar {
  icon: string
}
export const Avatar: FC<IAvatar> = ({ icon }) => {
  return (
    <Container>
      <Icon color='white' size={1} path={icon}></Icon>
    </Container>
  )
}
