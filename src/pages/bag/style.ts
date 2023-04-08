import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Centralize = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  padding: 30px 20px;

  background-color: #F5F5F5;

  display: flex;
  justify-content: center;

  @media(min-width: 700px){
    padding: 30px 120px;
  }
`

export const StyledBag = styled(motion.div)`
    box-sizing: border-box;

    width: 100%;
    max-width: 1920px;
    height: 100%;

    display: flex;
    flex-direction: column;

    .block__header{
      box-sizing: border-box;

      display: flex;
      justify-content: space-between;
      align-items: center;

      h2{
        font-size: 18px;
        color:#2A2A2A;

        display: flex;
        align-items: center;

        @media(min-width: 700px){
          font-size: 20px;
        }

        svg{
          font-size: 34px;
          color:#E5BA38;

          margin-right: 10px;
        }
      }
    }
  
`

export const FoundBag = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  padding: 20px 0px;

  p{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 20px;
    line-height: 41px;
  
    color: #1A1A1A;

    @media(min-width: 700px){
      font-size: 25px;
    }
  }

  figure{
    box-sizing: border-box;

    margin-top: 20px;

    width: 120px;
    height: 120px;

    border-radius: 50%;

    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      font-size: 44px;
      color:#E5BA38;
    }
  }
  
`

export const Time = styled(motion.div)`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 40px;

  padding: 10px;
  margin: 20px 0px;

  background-color: #FFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  p{
    font-family: "Inter";

    font-weight: 700;
    font-size: 12px;

    color: #2A2A2A;
  }

`

export const Resume = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;  

  margin-bottom: 20px;

  background-color: #FFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding:20px;

  @media(min-width: 1000px){
    width: 300px;
  }

  h4{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;

    color: #2A2A2A;
  }

  .resume__line{
    width: 100%;

    border: 1px solid #f5f5f5;

    border-radius: 4px;

    margin: 5px 0px;
  }

  .resume__information{
    box-sizing: border-box;

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 10px;

    p{
      font-family: 'Inter';
      font-weight: 700;
      font-size: 12px;

      color: #2A2A2A;
    }
  }

  .resume__price{
    box-sizing: border-box;

    width: 100%;

    .price__name{
      box-sizing: border-box;

      width: 100%;
      
      text-align:center;
      margin-bottom: 10px;

      font-family: 'Inter';
      font-weight: 700;
      font-size: 12px;

      color: #2A2A2A;
    }

    .price__value{
      box-sizing: border-box;

      width: 100%;
      height: 60px;

      background-color: #E4FFE5;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      border-radius: 4px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-family: 'Inter';
      font-weight: 700;
      font-size: 16px;

      color: #419E45;

      @media(min-width: 700px){
        font-size: 20px;
      }
    }
  }
`

export const Checkout = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;

  background-color: #FFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;

  margin: 0px 0px 20px 0px;

  @media(min-width: 700px){
    flex-direction: column;

    width: 70px;

    margin: 0px 0px 0px 20px;
  }
`

export const Organization = styled(motion.div)`
  box-sizing: border-box;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;


  @media(min-width: 1000px){
    flex-direction: row-reverse;
  }

  .transition_mobile{
    box-sizing: border-box;

    width: 100%;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    @media(min-width: 700px){
      flex-direction: row-reverse;
    }
    @media(min-width: 1000px){
      width: auto;
    }
  }

  .block__informations{
    box-sizing: border-box;

    width: 100px;
    height: 100px;

    background: green;
  }

  .organization__v2{
    box-sizing: border-box;

    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 1000px){
      width: 300px;
    }
  }
`
