import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLoginPage = styled.div`
  box-sizing: border-box;

  width: 100%;
  height:100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
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

    display: flex;
    flex-direction: column;

    padding: 20px;

    @media(min-width: 700px){
      max-width: 640px;

      padding: 30px 120px;
    }

    .form__title{
      box-sizing: border-box;
      
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 22px;

      color: #1A1A1A;
    }

    #checkbox{
      margin: 30px;
    }
    
  }
`

export const LinkPassword = styled(Link)`
  box-sizing: border-box;
  font-size: 12px;

  cursor: pointer;

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 12px;

  text-decoration: none;

  margin: 10px 0px 0px 0px;
  color:#D4A61C;

  align-self: flex-end;

  @media(min-width: 700px){
    font-size: 13px;
  }
`