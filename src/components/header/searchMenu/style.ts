import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledFormSearch = styled(motion.form)`
  background-color: var(--color-eerieBlack);

  width: 100%;
  height: 60px;

  padding: 0px 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    padding: 0px 120px;
  }
`;

export const StyledSearchInput = styled(motion.div)`
  width: 100%;
  height: 40px;

  position: relative;

  display: flex;
  align-items: center;

  input {
    width: 100%;
    height: 40px;

    padding: 10px;

    position: relative;
    z-index: 1;

    border: 2px solid var(--color-frenchGray);
    outline: 0;
    border-radius: 8px;

    background-color: var(--color-white);
    color: var(--color-manatee);

    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);

    font-family: var(--font-paragraph);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-p6);

    font-family: "Raleway";
    color: #1a1a1a;
    font-weight: 500;
    ::placeholder {
      color: "#949499";
      margin-left: 10px;
    }
  }

  button {
    width: 10%;
    height: 40px;

    position: absolute;
    right: 0%;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0px 8px 8px 0px;
    border: none;

    background-color: #d4a61c;

    svg {
      min-width: 70%;
      height: 70%;

      color: var(--color-frenchGray);
    }
  }
`;
