import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface IPropsStyledSwitch {
  position?: "center" | "flex-end" | "flex-start"
  maxwidth?:string
  margin?:string
}

export const StyledSwitch = styled.div<IPropsStyledSwitch>`
  box-sizing: border-box;

  width: 100%;
  ${({ maxwidth }) => maxwidth && css`max-width:${maxwidth};`}
  ${({ title }) => title && css`background-color:#F5F5F5; box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);`}

  margin: ${({ margin }) => margin ? margin : "20px 0px 10px 0px"};
  padding:5px 10px;

  border-radius:8px;

  display: flex;
  justify-content: ${({ position, title }) => title ? "space-between" : position ? position : "flex-end"};
  align-items:center;

  h4{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;

    margin-top:3px;

    padding:0px;

    color: #2A2A2A;
  }

  .disable{
    display: none;
  }

  label{  
    box-sizing: border-box;

    width: 50px;
    height: 30px; 

    border: 1px solid #C7C7CC;
    border-radius: 28px;

    display: flex;

    cursor: pointer;
  }
`

export const Ball = styled(motion.div)`
  box-sizing: border-box;

  width: 26px;
  min-width: 26px;
  height: 26px; 
  min-height: 26px;

  background: #D9D9D9;

  border-radius: 50%;
  margin: 1px;
`
