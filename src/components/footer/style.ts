import styled from "styled-components";
import logoBrecho from "../../assets/images/02FullLogo-Silver-Png.png";
import logoBrechoPequena from "../../assets/images/Icon-Silver-Png.png";

export const StyledFooter = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: auto;
  min-height: 150px;

  background-color: #1A1A1A;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  padding: 10px 10px;

  display: flex;
  justify-content:center;

  .footer__brecho{
    box-sizing: border-box;

    display: flex;

    width: 100%;
    max-width: 700px;

    margin: 10px;

    img{
      content: url(${logoBrechoPequena});
      width: 30px;
      height: 40px;
      outline: none;
      flex-shrink: 0;

      margin-right:10px;

      @media(min-width: 700px){
        content: url(${logoBrecho});
        width: 150px;
      }
    }

    p{
      font-family: 'Inter';
      font-weight: 500;
      font-size: 12px;

      color: #C7C7CC;
    }
  }

  @media(min-width: 700px){
    padding: 20px 110px;
  }
`
export const Centralize = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1920px;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 400px){
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`