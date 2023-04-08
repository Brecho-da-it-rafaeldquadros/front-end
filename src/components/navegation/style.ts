import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledNavegation = styled( motion.div )`
  box-sizing: border-box;
  
  width: calc(100% - 40px);
  min-width: 200px;
  height: 100%;

  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  border-radius: 8px;

  margin: 20px;

  display: flex;
  flex-direction: column;

  padding: 20px;

  @media(min-width: 700px){
    width: 200px;
    min-width: 200px;

    border-radius: 0px 8px 8px 0px;

    margin: 0px;
  }

  h5{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 18px;
 
    color: #2A2A2A;

    margin-bottom: 10px;
  }

  p{
    font-family: 'Raleway';
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #2A2A2A;

    margin-bottom: 20px;
  }
`

export const Buttons = styled.nav`

`

interface IPropsButton {
  position?:"center" | "start" | "end"
}

export const Button = styled(motion.button)<IPropsButton>`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;

  padding: 10px 20px;

  font-family: 'Raleway';
  font-weight: 500;
  font-size: 14px;

  color: #2A2A2A;

  display: flex;
  justify-content:${({ position }) => position ? position : "start"};
  align-items: center;

  border: none;

  margin-bottom: 10px;

  cursor: pointer;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  :hover{
    transition: 200ms;

    background:#FFF5D9;
  }
`
