import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Organization = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  margin-top: 10px;
`

interface IPropsDateTime {
  message?:string
}

export const Label = styled(motion.label)<IPropsDateTime>`
  box-sizing: border-box;

  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin-left: 5px;

  font-family: 'Raleway';
  color: ${({ message }) => message ? "#FA505A" : "#1A1A1A"} ;
  font-weight: 500;
  background: rgba(199, 199, 204, 0.2);
`

export const StyledDateTime = styled(motion.input)`
  box-sizing: border-box;

  cursor: pointer;

  width: 100%;
  height: 40px;

  padding: 10px;

  border-radius: 8px;
  border: 2px solid var(--color-frenchGray);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.20);

  font-family: 'Inter';
  color: #1A1A1A;
  font-weight: 500;

  outline: 0;
`