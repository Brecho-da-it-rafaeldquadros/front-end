import styled from "styled-components";

export const Organization = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  flex-direction: column;

  margin: 10px 0px;
`;

export const Input = styled.input`
  box-sizing: border-box;

  width: 100%;

  display: none;
`;

export const FileBlock = styled.label`
  box-sizing: border-box;

  width: 100%;
  height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  font-size: 12px;

  font-family: "Raleway";
  color: #1a1a1a;
  font-weight: 600;

  border-radius: 8px;
  border: 2px solid var(--color-frenchGray);

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

  cursor: pointer;
`;

export const Image = styled.span`
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 10px;
  font-family: "Inter";
  color: #1a1a1a;
  font-weight: 400;
`;

export const StyledNameImage = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 60px;

  padding: 10px;

  border-radius: 8px;
  background-color: #f5f5f5;

  font-size: 10px;
  font-family: "Inter";
  color: #1a1a1a;
  font-weight: 400;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 5px 0px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
