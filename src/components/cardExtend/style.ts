import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const StyledCardExtend = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;

  margin-bottom: 10px;
`

interface IPropsHeader {
  isOpen:boolean
}

export const Header = styled.div<IPropsHeader>`
  box-sizing: border-box;

  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${({ isOpen }) => isOpen ? "4px 4px 0px 0px" : "4px"};

  width: 100%;

  padding: 0px 20px;

  .header__content{
    box-sizing: border-box;

    ${({ isOpen })=> isOpen&&
      css`border-bottom:2px solid #f5f5f5;`
    }

    padding:20px 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }
`


export const Body = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;

  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 4px 4px;

  padding: 0px 20px;
`