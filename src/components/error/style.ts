import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ErrorStyled = styled(motion.span)`
  box-sizing: border-box;

  width: 100%;
  height: auto;

  margin-top: 10px;

  border-radius: 4px;
  background-color: #ee32321f;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);

  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-family: 'Raleway';
  font-weight: 400;
  font-size: 12px;


  svg{
    color: #EE3232;

    font-size: 30px;

    padding: 0px;
  }
`