import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledBoxMenu = styled.div`
  height: calc(100vh - 84px - 140px);
  overflow-y: scroll;
  max-height: 400px;
  overflow-y: scroll;
`;

export const StyledMenu = styled(motion.nav)`
  background-color: var(--color-eerieBlack);
  min-height: calc(100vh - 84px);
  padding: 5px;

  transform: none;

  position: absolute;
  z-index: 1;

  width: 100%;
  height: 85vh;

  p {
    font-family: var(--font-paragraph);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    margin-left: 15px;

    color: #c7c7cc;
  }

  .itemMenu {
    width: 100%;
    height: 58px;

    background-color: #151515;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 5px;

    text-decoration: none;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const StyledListCategory = styled(motion.div)`
  width: 100%;
  height: 58px;

  background-color: #151515;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 5px;

  text-decoration: none;
`;

export const StyledSubMenu = styled(motion.ul)`
  width: 100%;
  max-height: 300px;

  overflow-y: scroll;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  li {
    text-decoration: none;

    width: 90%;
    min-height: 58px;

    background-color: #151515;

    margin-bottom: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .subMenu {
    font-family: var(--font-paragraph);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;

    margin-left: 15px;

    color: #c7c7cc;
  }
`;

export const StyledItenMenu = styled.div`
  width: 150px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 10px;
`;

export const StyledMore = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  img {
    width: 24px;
    height: 14px;
    margin-right: 5px;
  }
`;

export const StyledImg = styled.img`
  min-width: 25px;
  min-height: 25px;
  max-width: 25px;
  max-height: 25px;
`;
