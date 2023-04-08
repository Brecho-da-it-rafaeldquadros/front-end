import styled from "styled-components";

export const StyledUsersBox = styled.div`
  width: 100%;
  max-width: 1131px;
  height: max-content;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  background-color: #ffffff;

  padding: 0px 20px;
`;

export const StyledUserList = styled.ul`
  width: 100%;
  height: max-content;

  background-color: #ffffff;

  padding: 10px 0px;

  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 700px;
  margin-bottom: 10px;

  ::-webkit-scrollbar {
    background-color: #f5f5f5;
    border-radius: 0px 8px 8px 0px;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c7c7cc;
  }
  li {
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #f5f5f5;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    margin-top: 10px;

    h2 {
      margin-left: 20px;

      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #2a2a2a;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      height: max-content;

      h2 {
        padding: 20px 0px;
      }
    }
  }
`;

export const StyledNivelAndEdit = styled.div`
  width: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;

    color: #d4a61c;
  }

  @media (max-width: 700px) {
    height: 60px;
    width: 100%;
    p {
      margin-left: 20px;
    }
  }
`;

export const StyledTitleUser = styled.div`
  width: 100%;
  max-width: 1131px;
  height: 120px;

  /* padding: 20px 100px 20px 120px; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    padding: 20px 0px 20px 20px;
  }

  @media (min-width: 1960px) {
    max-width: 1428px;
  }
`;
