import { motion } from "framer-motion";
import { Form } from "react-router-dom";
import styled from "styled-components";

export const StyledAdminSearch = styled(motion.form)`
  width: 100%;
  height: 100px;

  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border-top: 1px solid #c7c7cc;
    border-bottom: 1px solid #c7c7cc;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
  input {
    min-width: 100%;
    height: 40px;

    background: #ffffff;

    border: 1px solid #c7c7cc;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    padding: 10px;

    ::placeholder {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;

      color: #c7c7cc;
    }
  }
  button {
    height: 95%;
    width: 30px;

    position: absolute;
    right: 0.5%;

    border: none;
    background-color: transparent;

    svg {
      min-width: 100%;
      height: 100%;

      color: #c7c7cc;
    }
  }
`;
