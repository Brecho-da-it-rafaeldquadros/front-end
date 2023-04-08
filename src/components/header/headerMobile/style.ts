import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 84px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  z-index: 2;

  background-color: var(--color-eerieBlack);

  border-bottom: 1px solid var(--color-frenchGray);
  section {
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
  }

  div {
    width: max-content;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5px 0px;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledButtonGlass = styled.button`
  cursor: pointer;

  margin: 5px 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 30px;
  min-height: 30px;
  max-width: 30px;
  max-height: 30px;

  border: none;
  background-color: var(--color-eerieBlack);
  a {
    min-width: 100%;
  }
  svg {
    min-width: 100%;
    height: 100%;

    color: var(--color-frenchGray);
    path {
      color: var(--color-frenchGray);
    }
  }
`;

export const StyledImgHeaderMobile = styled.img`
  max-width: 30px;
  height: 40px;
`;
