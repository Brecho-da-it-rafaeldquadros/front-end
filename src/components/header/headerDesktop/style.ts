import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledHeaderDesk = styled.header`
  width: 100%;
  min-height: 84px;
  h1 {
    color: red;
  }
  display: none;
  justify-content: space-between;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 2;

  background-color: var(--color-eerieBlack);

  border-bottom: 1px solid var(--color-frenchGray);

  .sectionHeader {
    width: 100%;
    max-width: 2158px;

    display: flex;
    justify-content: space-between;
    padding: 0px 120px;
  }

  .boxIcons {
    width: max-content;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 150px;
      height: 40px;
    }
  }

  @media (min-width: 700px) {
    position: relative;
    display: flex;
  }
`;

export const StyledLoginDesk = styled.div`
  width: max-content;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 2.5px 20px;

  p {
    margin-right: 5px;

    font-weight: 500;
    font-size: 11px;
    line-height: 12px;

    color: #ffffff;
  }
  a {
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;

    text-decoration: none;

    color: #e5ba38;
  }
  div {
    display: flex;
    justify-content: flex-start;
    padding: 2.5px 0px;
  }
`;

export const StyledMotionForm = styled(motion.form)`
  margin-right: 10px;
  margin-left: 10px;

  input {
    background: #1a1a1a;

    color: white;

    border: 1px solid #c7c7cc;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  button {
    background: transparent;
  }
`;
