import styled from 'styled-components'

export const StyledProfile = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1920px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 700px){
    flex-direction: row;
  }
`