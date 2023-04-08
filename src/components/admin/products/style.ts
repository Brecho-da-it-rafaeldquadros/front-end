import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAdminProducts = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.div`
  width: 100%;
  max-width: 1131px;
  height: 120px;

  padding: 20px 100px 20px 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    padding: 20px 0px 20px 20px;
  }

  @media (min-width: 1960px) {
    max-width: 1428px;
  }

  h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 41px;

    color: #1a1a1a;
  }
`;

export const StyledListProducts = styled.ul`
  width: 100%;
  max-width: 1126px;

  padding: 0px 120px;

  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;

  gap: 20px;
  @media (max-width: 700px) {
    padding: 0px 20px 0px 20px;
    justify-content: center;
  }
  @media (min-width: 1960px) {
    padding: 0px 20px 0px 20px;
    justify-content: center;
    max-width: 1428px;
  }
`;
