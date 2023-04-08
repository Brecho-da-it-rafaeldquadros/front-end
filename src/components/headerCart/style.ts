import styled from "styled-components";
import logoBrecho from "../../assets/images/02FullLogo-Silver-Png.png";
import logoBrechoPequena from "../../assets/images/Icon-Silver-Png.png";

export const StyledHeaderCart = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 124px;

  background-color: #1a1a1a;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    content: url(${logoBrechoPequena});
    width: 37px;
    height: 46px;
    outline: none;
    flex-shrink: 0;

    margin-right: 10px;

    @media (min-width: 700px) {
      content: url(${logoBrecho});
      width: 180px;
    }
  }
`;
