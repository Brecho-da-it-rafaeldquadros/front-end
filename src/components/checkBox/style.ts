import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IPropsStyledCheckBox {
  position?: "left" | "center" | "right"
}

export const StyledCheckBox = styled(motion.div)<IPropsStyledCheckBox>`
  box-sizing: border-box;

  width: auto;
  height: auto;

  position: relative;

  display: flex;
  justify-content: ${({ position }) => position ? position === "center" ? "center" : position === "right" ? "flex-end" : "flex-start" : "flex-start"};
  align-items: center;
  flex-wrap: wrap;

  margin: 10px 0px;
`

interface IPropsCheckBoxBlock {
  ischeck:boolean
  removeCheck?:boolean
}

export const CheckBoxBlock = styled(motion.label)<IPropsCheckBoxBlock>`
  box-sizing: border-box;

  width: 20px;
  min-width: 20px;
  height: 20px;
  min-height: 20px;

  cursor: pointer;

  margin-right: 10px;

  border-radius: 4px;
  border: 2px solid var(--color-frenchGray);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);

  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    display: ${({ ischeck }) => ischeck ? "unset" : "none" };

    font-size: 12px;

    color: var(--color-frenchGray);
  }

  ${({ removeCheck })=> removeCheck&&css`display:none;`}

`

export const Label = styled(motion.label)`

  cursor: pointer;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;

  color: #7F858D;

  margin-right: 5px;

  @media(min-width: 500px){
    font-size: 14px;
  }
`

export const LinkStyled = styled.button`

  cursor: pointer;

  border: none;
  background-color: transparent;

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 12px;

  color:#D4A61C;

  text-underline-offset:3px;

  @media(min-width: 500px){
    font-size: 13px;
  }
`

export const Input = styled(motion.input)`
  padding: 100px;

  display: none;

  font-size: 20px;
`

