import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledBagProducts = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;

  @media(min-width: 1000px){
    margin-right: 20px;
  }

  h3{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;

    color: #2A2A2A;

    margin-bottom: 20px;
  }

  
`
