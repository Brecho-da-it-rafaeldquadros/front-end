import styled from 'styled-components'
import { motion } from 'framer-motion'

export const StyledProduct = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;
  
  display: flex;
  flex-direction: column;

  margin-bottom: 40px;

  @media(min-width: 500px){
    flex-direction: row;

    height: 175px;
  }
`

export const CardImage = styled.div`
  box-sizing: border-box;

  cursor: pointer;

  width: 100%;
  min-width: 120px;
  height: 200px;

  padding: 10px;

  background: #FFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;
  margin-bottom:10px;

  @media(min-width: 500px){
    margin-bottom:0px;

    width: 120px;
  }

  p{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 14px;

    color: #D4A61C;
  }

  figure{
    box-sizing: border-box;

    border-radius: 4px;
    overflow: hidden;

    img{
      width: 100%;
      max-width: 146px;
      height: 100%;
    }
  }
`

export const CardInformations = styled.div`
  box-sizing: border-box;
  
  width: 100%;
  height: 200px;

  background: #FFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 500px){
    margin-left: 10px;
  }

  .card__block{
    box-sizing: border-box;

    width: 100%;

    display: flex;
    justify-content: space-between;
  
    .block__category{
      font-family: 'Raleway';
      font-weight: 700;
      font-size: 14px;

      color: #1A1A1A;
    }
  }

  .card__title{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 20px;

    color: #1A1A1A;
  }

  .card__price{
    font-family: 'Scoth Brace';
    font-weight: 400;
    font-size: 30px;
      
    color: #1A1A1A;

    width: 100%;
    height: 45px;

    display: flex;
    align-items: flex-end;

      .price__symbol{
        font-family: 'Raleway';
        font-weight: 600;
        font-size: 14px;

        align-self: flex-start;
      }

      .price__value{
        font-family: 'Scoth Brace';
        font-weight: 400;
        font-size: 40px;

        margin-bottom: 6px;
      }
        
      .price_penny{
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 18px;
      }
  }
`