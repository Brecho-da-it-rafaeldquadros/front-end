import styled from 'styled-components'
import { motion } from 'framer-motion'

interface IPropsStyledTimer {
  hasOneMinute:boolean
  hasFiveMinute:boolean
}

export const StyledTimer = styled(motion.span)<IPropsStyledTimer>`
  box-sizing: border-box;

  position: fixed;
  top: 0px;
  right: 20px;

  z-index: 4;

  width: 100%;
  max-width: 90px;
  height: 20px;

  border-radius: 0px 0px 8px 8px;

  background: #61606096;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;
  
  @media(min-width: 700px){
    justify-content: space-between;

    max-width: 320px;
    right: 120px;
  }

  .remove_mobile{
    display: none;

    @media(min-width: 700px){
      display: unset;
    }
  }

  p{
    font-family: 'Inter';
    font-weight: 700;
    font-size: 10px;

    color: ${({ hasOneMinute, hasFiveMinute }) => hasOneMinute ? "#FA505A" : hasFiveMinute ? "#E5BA38" :  "#76ff87"};
  }
`
