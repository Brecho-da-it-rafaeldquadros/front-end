import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const StyledFound = styled( motion.div )`
  box-sizing: border-box;

  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`
interface IPropsCard {
  modeADM?:boolean
}

export const Card = styled.div<IPropsCard>`
  box-sizing: border-box;

  width: 100%;
  max-width: 450px;

  padding: 20px;
  margin: 20px;

  display: flex;
  flex-direction: column;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  
  @media(min-width: 700px){
    padding: 30px;
  }

  .card__header {
    box-sizing: border-box;

    display: flex;
    ${({ modeADM }) => modeADM && css`justify-content: space-between;` }
    align-items: center;

    p{
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;

      margin-right: 10px;

      color: #2A2A2A;
    }

    svg{
      width: 36px;
      min-width: 36px;

      font-size: 32;
      
      color: #EE3232;
    }
  }

  .card__body {
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 10px;

    .body__text{
      box-sizing: border-box;

      width: 100%;
      max-width: 300px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-right: 10px;

      svg{
        width: 36px;
        min-width: 36px;

        font-size: 36;

        color: #1C5BD4;
      }

      p{
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;

        margin-right: 20px;

        margin-left: 10px;

        color: #2A2A2A;
      }
    }
  }

  .card__footer {
    box-sizing: border-box;

    width: 100%;
    max-width: 300px;

    margin-top: 20px;

    font-family: 'Raleway';
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    text-align: center;
    overflow-wrap: break-word; 


    align-self: center;

    color: #7F858D;
  }
`
