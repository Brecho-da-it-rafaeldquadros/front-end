import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledCardProduct = styled.li`
  width: 282px;
  height: 513px;

  position: relative;

  background-color: #f5f5f5;
`;

export const StyledImageProduct = styled(motion.img)`
  width: 100%;
  min-width: 282px;
  height: 310px;
  min-height: 310px;

  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
`;

export const StyledBoxImages = styled.div`
  display: flex;
  max-width: 282px;
  scroll-behavior: smooth;

  overflow-x: scroll;
  overflow-x: hidden;
`;

export const StyledBrandName = styled.h2`
  width: 100%;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;

    color: #d4a61c;
  }
`;

export const StyledProductName = styled.h2`
  height: 50px;

  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  max-width: 240px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: #1a1a1a;
`;

export const StyledProductDescription = styled.h2`
  display: flex;
  justify-content: space-between;

  p {
    max-width: 225px;
    max-height: 35px;

    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;

    color: #1a1a1a;

    white-space: pre-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledPriceProduct = styled.div`
  display: flex;

  margin-top: 0px;

  h3 {
    margin-top: 5%;
  }
  h4 {
    font-family: "Scoth Brace";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 78px;

    color: #1a1a1a;
  }
  h5 {
    margin-top: 12.5%;
  }
`;

export const StyledBoxButtonsProducts = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  position: absolute;
  z-index: 0;
  top: 25%;
`;

export const StyleButton = styled.button`
  max-width: 100%;
  min-height: 30px;

  border: none;
  background-color: transparent;

  cursor: pointer;

  opacity: 30%;
  :hover {
    opacity: 100%;
  }

  svg {
    width: 100%;
    height: 100%;

    color: #3d3d41;
  }
`;

export const StyleButtonRightAndLeft = styled.button`
  max-width: 50px;
  min-height: 50px;

  border: none;
  background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  opacity: 30%;
  :hover {
    opacity: 100%;
  }

  svg {
    width: 50px;
    height: 50px;

    color: #3d3d41;
  }
`;

export const StyledBoxButtonsAdmin = styled.div`
  width: 40px;
  height: 140px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  right: 0%;
  bottom: 6%;
`;

export const StyledTextPromotion = styled.h4`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: line-through;

  padding: 10px 0px;

  color: #1a1a1a;
`;

export const StyledImageUpdate = styled.img`
  width: 282px;
  height: 310px;
`;

export const StyledBoxPagination = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  bottom: 0;
`;
