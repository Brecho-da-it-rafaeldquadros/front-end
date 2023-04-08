import styled from 'styled-components'

export const StyledPrivacyPolicyPage = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .text{
    box-sizing: border-box;

    width: 100%;
    
    p{
      font-family: 'Raleway';
      font-weight: 400;
      font-size: 14px;

      margin: 10px 0px;

      color: #1A1A1A;
    }
  }

  .organization{
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    .container{
      box-sizing: border-box;

      padding: 20px 20px;
   

      width: 100%;
      
      @media(min-width: 700px){
        padding: 30px 120px;
      }

      h3{
        box-sizing: border-box;
      
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 22px;

        color: #1A1A1A;

        margin-bottom: 20px;
      }
    }
  }
`
