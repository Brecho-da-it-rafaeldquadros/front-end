import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledBagAddressAndDelivery = styled(motion.div)`
  width: 100%;

  @media(min-width: 1000px){
    margin-right: 20px;
  }
`

export const Header = styled.div`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  h3{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;

    color: #2A2A2A;
  }
`
