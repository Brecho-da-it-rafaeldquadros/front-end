import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledCarousel = styled( motion.div )`
  box-sizing: border-box;

  width: 100%;

  margin: 30px 0px;

  .button__left{

  }

  .button__right{

  }
`

export const Header = styled.div`
  box-sizing: border-box;

  width: 100%;

  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;

  h3{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;

    color: #2A2A2A;
  }
`

export const ButtonLink = styled.button`
  font-family: 'Raleway';
  font-weight: 600;
  font-size: 16px;
  text-decoration-line: underline;

  cursor: pointer;

  color: #D4A61C;
  background-color: transparent;

  outline: 0;
  border: none;
`

export const ButtonCarousel = styled.button`
  box-sizing: border-box;

  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid #D9D9D9;

  background: transparent;

  padding: 5px;

  svg{
    font-size: 30px;

    color: ${({ disabled }) => disabled ? "#D9D9D9" : "#1A1A1A"};
  }
`