import styled from 'styled-components'

export const StyledData = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  width: 100%;

  padding: 10px 20px 30px 20px;

  @media(min-width: 700px){
    padding: 20px 120px; 
  }

  .data__header{
    box-sizing: border-box;

    width: 100%;

    display: flex;
    justify-content: space-between;
  }

  .order_title{
    
    font-family: 'Raleway';
    font-size: 18px;
    color:#2A2A2A;

    display: flex;
    align-items: center;

    margin-bottom: 20px;

    @media(min-width: 700px){
      font-size: 20px;
    }

    svg{
      font-size: 34px;
      color:#E5BA38;

      margin-right: 10px;
    } 
  }
`
export const Header = styled.div`
  box-sizing: border-box;

  h3{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;

    color: #2A2A2A;

    margin-right: 10px;
  }
`

export const Footer = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  justify-content: flex-end;
`