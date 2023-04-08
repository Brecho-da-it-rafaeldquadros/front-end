import styled from 'styled-components'

export const StyledBasePage = styled.div`
  box-sizing: border-box;

  width: 100%;
  height:100%;
  min-height: calc(100vh - 124px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .organization__page{
    box-sizing: border-box;

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .organization{
    box-sizing: border-box;

    width: 100%;
  }

`
export const Organization = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  min-height: 80vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`