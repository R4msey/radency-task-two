import styled from 'styled-components'
interface IRowProps {
  color?: string
  br?: boolean
  hidden?: boolean
}

interface ITdProps {
  text?: boolean
}

export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 10px;
  box-sizing: border-box;
`

export const Row = styled.tr<IRowProps>`
  background-color: ${(props) => props.color || '#e8eaf5'};
  border-radius: ${(props) => (props.br ? '15px' : 0)};
  overflow: hidden;
`

export const Th = styled.th`
  color: white;
  padding: 10px 10px;
  border: none;
  font-weight: 600;
  height: 35px;
  font-width: 600;

  &:last-child {
    text-align: end;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-spacing: 0px;
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`

export const Td = styled.td<ITdProps>`
  padding: 10px 10px;
  font-weight: ${(props) => (props.text ? 600 : 500)};
  color: ${(props) => (props.text ? '#3b3b3d' : '#7c7d80')};
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:last-child {
    text-align: end;
    max-width: 120px;
  }
`
