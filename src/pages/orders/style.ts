import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledOrders = styled( motion.div )`
  box-sizing: border-box;

  width: 100%;

  padding: 10px 20px 30px 20px;

  @media(min-width: 700px){
    padding: 20px 120px; 
  }
  
  .order__pagination_block_first{
    box-sizing: border-box;

    width: 100%;

    padding-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;
  }

  .order__pagination_block_second{
    box-sizing: border-box;

    width: 100%;

    padding-top: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .order_title{
    
    font-family: 'Raleway';
    font-size: 18px;
    color:#2A2A2A;

    display: flex;
    align-items: center;

    margin-bottom: 20px;

    @media(min-width: 700px){
      font-size: 20px;
    }

    svg{
      font-size: 34px;
      color:#E5BA38;

      margin-right: 10px;
    } 
  }
`

export const Header = styled.div`
  box-sizing: border-box;

  display: flex;

  padding: 0px 10px;

  h3{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 16px;

    color: #2A2A2A;

    margin-right: 10px;
  }

  p{
    font-family: 'Inter';
    font-weight: 500;
    font-size: 8px;

    color: #2A2A2A;
  }
`

export const Footer = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-end;
`

export const ModeADM = styled.p`
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  
  p{
    padding-left: 5px;

    font-family: "Inter";
    font-size: 10px;
  }
`