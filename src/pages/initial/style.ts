import styledEngine from "@mui/styled-engine";
import styled from "styled-components";

export const StyledInitial = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1920px;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 30px 20px;

  @media (min-width: 700px) {
    padding: 30px 120px;
  }
`;

export const StyledListProductsHome = styled.ul`
  width: 100%;
  max-width: 1126px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 20px;
  @media (max-width: 700px) {
    padding: 0px 20px 0px 20px;
    justify-content: center;
  }

  @media (max-width: 1440px) {
    padding: 0px 20px 0px 20px;
    justify-content: center;
    max-width: 1440px;
  }

  @media (min-width: 1440px) {
    padding: 0px 20px 0px 20px;
    justify-content: center;
    max-width: 1920px;
  }
`;

export const StyledTitleHome = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;

    color: #1a1a1a;
  }
`;

export const StyledListProductsCarousel = styled.ul`
  width: 100%;

  display: flex;

  overflow: hidden;
  overflow-x: scroll;

  gap: 20px;

  ::-webkit-scrollbar {
    background-color: #f5f5f5;
    border-radius: 0px 8px 8px 0px;
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c7c7cc;
  }
`;
export const StyledBackgroundImage = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100%;

  position: absolute;

  background-color: #1a1a1a;
  opacity: 40%;
`;

export const StyledBoxImageHome = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: unset;
  color: #1a1a1a 20%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    min-width: 1000px;
  }
  @media (max-width: 700px) {
    img {
      min-width: 700px;
    }
  }
  @media (min-width: 1440px) {
    img {
      min-width: 1920px;
      max-height: 800px;
    }
  }
  @media (max-width: 1440px) {
    img {
      min-width: 1000px;
    }
  }
`;

export const StyledImgText = styled.div`
  position: absolute;
  width: 80%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 100%;
    font-size: auto;
    position: relative;
    font-family: "Scoth Brace";
    font-style: normal;
    font-weight: 400;
    font-size: 68px;
    line-height: 93px;
    text-align: center;
    color: #ffffff;
  }

  h4 {
    display: flex;
    justify-content: center;

    margin-top: 10px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 60px;
    text-align: center;

    color: #e5ba38;
  }

  @media (max-width: 700px) {
    width: 90%;
    p {
      font-size: 37px;
      line-height: 62px;
    }
    h4 {
      font-size: 15px;
      line-height: 30px;
    }
  }
  @media (min-width: 1440px) {
    p {
      font-size: 68px;
    }
    h4 {
      font-size: 25px;
    }
  }
`;

export const StyledSeeMore = styled.button`
  cursor: pointer;

  border: none;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-decoration-line: underline;

  color: #d4a61c;
`;
