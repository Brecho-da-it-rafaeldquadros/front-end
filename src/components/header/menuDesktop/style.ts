import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMenuDesk = styled(motion.nav)`
  width: 100%;
  height: 40px;

  display: none;

  background-color: #e5ba38;
  @media (min-width: 700px) {
    display: flex;
  }
`;

export const StyledBoxMenuDesk = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  padding: 0px 120px;

  p:hover {
    text-decoration: underline;
  }
  a:hover {
    text-decoration: underline;
  }
  p:focus {
    text-decoration: underline;
  }
  a:focus {
    text-decoration: underline;
  }
  a {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;

    position: relative;
    top: 0%;

    color: #1a1a1a;
  }
`;

export const StyledBoxSubMenuDesk = styled.section`
  width: 150px;
  height: 40px;

  position: relative;
  top: 0%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  cursor: pointer;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
  :hover ul {
    display: flex;
  }
`;

export const StyledSubMenuDesk = styled.ul`
  width: 150px;
  margin-top: 20px;

  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  top: 50%;

  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  animation: showCadastro 300ms 1 forwards;
  opacity: 0%;

  @keyframes showCadastro {
    to {
      opacity: 100%;
    }
  }

  li {
    min-height: 40px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }
  }
  li:hover {
    background-color: rgba(199, 199, 204, 0.2);
  }
`;
