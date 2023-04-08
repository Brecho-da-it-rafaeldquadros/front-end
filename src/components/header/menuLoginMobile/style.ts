import styled from "styled-components";

export const StyledSectionLogin = styled.section`
  height: 140px;
  width: 98%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  position: absolute;
  bottom: 0%;

  border-top: 1px solid var(--color-frenchGray);

  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledButtonGold = styled.button`
  width: 90%;
  height: 40px;

  font-size: 20px;
  font-weight: 600;

  color: ${({ color }) => (color === "black" ? "#D4A61C" : "#f5f5f5")};
  background-color: ${({ color }) =>
    color === "black" ? "#1A1A1A" : "#D4A61C"};
  border: 1px solid #d4a61c;

  border-radius: 6px;
`;
