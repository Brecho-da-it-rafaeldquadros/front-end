import styled from 'styled-components'
import { motion } from 'framer-motion'

interface IPropsStyledStage {
  isPage:boolean
}

export const StyledStage = styled(motion.figure)<IPropsStyledStage>`
  box-sizing: border-box;

  transition: 300ms;

  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(min-width: 700px){
    width: 70px;
  }

  svg{
    transition: 300ms;

    color:${({ isPage }) => isPage ? "#E5BA38" : "#D9D9D9"}
  }

  span{
    box-sizing: border-box;

    transition: 300ms;

    padding: 0px;

    font-size: 8px;
    font-family: 'Raleway';
    font-weight: 700;

    color:${({ isPage }) => isPage ? "#E5BA38" : "#D9D9D9"}
  }
`
