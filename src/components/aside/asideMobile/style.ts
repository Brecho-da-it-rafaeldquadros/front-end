import styled from "styled-components";

export const StyledAsideMobile = styled.nav`
  /* min-height: calc(100vh - 124px); */

  height: max-content;
  padding: 0px 20px;

  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledAsideItem = styled.div`
  button {
    justify-content: flex-start;

    margin-top: 11px;
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

export const StyledWellcome = styled.section`
  height: 88px;
  margin-top: 45px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;

  color: #2a2a2a;

  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  h2 {
    padding: 20px;
  }
`;
