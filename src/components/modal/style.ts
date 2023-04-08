import styled from 'styled-components'
import { motion } from 'framer-motion'

interface IPropsSize {
  maxWidth?:string
}

export const Background = styled(motion.div)<IPropsSize>`
  box-sizing: border-box;

  position: fixed;
  top:0;

  z-index: 100;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(26, 26, 26, 0.2);
`

export const ModalBaseBlock = styled(motion.div)<IPropsSize>`
  box-sizing: border-box;

  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : "450px"};

  padding: 30px 15px 30px 20px;

  .modal__header{
    box-sizing: border-box;

    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-bottom: 10px;

    .header__name_modal{
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 18px;

      color: #1A1A1A;

      @media(min-width: 500px){
        font-size: 20px;
      }
    }

    .header__close{
      box-sizing: border-box;

      padding: 0px;
      cursor: pointer;

      border: none;
      border-radius: 4px;

      height: 24px;

      background-color: transparent;

      :hover{
        background: rgba(217, 217, 217, 0.2);
      }

      svg{


        font-size: 24px;

        
      }
    }
    
  }
`

export const Scroll = styled(motion.div)<IPropsSize>`
  box-sizing: border-box;

  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth : "450px"};

  height: auto;
  max-height: 80vh;
  margin: 20px;

  overflow-y: scroll;
  overflow-x: visible;

  background-color: #F5F5F5;
  border-radius: 8px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));

  ::-webkit-scrollbar{
    background-color: #F5F5F5;
    border-radius: 0px 8px 8px 0px;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb{
    background-color: #C7C7CC;
  }
`