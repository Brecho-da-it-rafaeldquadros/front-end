import styled from 'styled-components'

export const StyledRegisterPage = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form{
    width: 100%;
    max-width: 440px;
  
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;

    @media(min-width:700px){
      padding: 30px 120px;

      max-width: 640px;
    }

    .form__title{
      box-sizing: border-box;
      
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 22px;

      color: #1A1A1A;

      align-self: flex-start;
    }

    #checkbox{
      margin: 30px;
    } 
  }
`
