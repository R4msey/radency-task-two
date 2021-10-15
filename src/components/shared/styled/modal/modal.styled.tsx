import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(30, 30, 30, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
`

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContainerInput = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  & span {
    margin-bottom: 10px;
  }
`
