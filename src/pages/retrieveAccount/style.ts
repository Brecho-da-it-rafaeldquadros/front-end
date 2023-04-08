import styled from 'styled-components'

export const StyledRetrieveAccount = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .organization{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  form{
    box-sizing: border-box;

    width: 100%;
    max-width: 440px;

    padding: 20px;

    #checkbox{
      margin: 30px;

      width: calc(85%);

      justify-content: center;
    } 

    h3{
      box-sizing: border-box;
      
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 22px;

      color: #1A1A1A;
    }

    @media(min-width: 700px){
      padding: 30px 120px;

      max-width: 640px;
    }
  }
`
