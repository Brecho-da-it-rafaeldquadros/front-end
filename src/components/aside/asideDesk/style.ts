import styled from "styled-components";

export const StyledAsideDesk = styled.nav`
  min-height: calc(100vh - 124px);
  max-width: 200px;

  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border: 4px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledButtonMenuDesk = styled.button`
  width: 100%;
  height: 50px;

  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 20px;

  color: gold;
  background: #ffffff;

  border: none;

  svg {
    width: 45px;
    height: 45px;
  }

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    color: #2a2a2a;
  }
`;

export const StyledAsideMenuDesk = styled.div`
  button {
    justify-content: flex-start;
  }
  p {
    margin-left: 20px;
    cursor: pointer;
  }
  svg {
    width: 34px;
    height: 34px;
  }
`;
