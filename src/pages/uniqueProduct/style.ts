import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledUniqueProduct = styled.div`
  box-sizing: border-box;

  width: 100%;
  max-width: 1920px;
  height: auto;

  .product__title{
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 20px;

    color: #2A2A2A;

    margin-bottom: 20px;
  }
`

export const Padding = styled.div`
  box-sizing: border-box;

  width: 100%;

  padding: 10px 20px 30px 20px;

  display: flex;
  justify-content: center;

  @media(min-width: 700px){
    padding: 20px 120px; 
  }
`

export const Carousel = styled(motion.div)`
  box-sizing: border-box;

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));
  border-radius: 4px;

  margin: 0px;

  width: calc(100% - 20px);
  max-width: 400px;

  @media(min-width: 700px){
    margin: 0px 10px 10px 0px;
  }
`

export const Figure = styled.figure`
  box-sizing: border-box;

  width: 100%;
  max-width: 450px;

  display: flex;
  justify-content: center;
`

export const IMG = styled.img`
  box-sizing: border-box;

  padding: 10px;

  background: #FFF;

  width: 100%;
  height: auto;
`

export const Slide = styled.div`
  box-sizing: border-box;

  margin: 5px;
  
  cursor: pointer;

  background: #FFF;

  width: 80px;
  height: 80px;
  min-height: 80px;

  display: flex;
  align-items:center;

  padding: 10px;

  img{
    width: 100%;
  }

  :hover{
    filter: drop-shadow(0px 2px 0px rgba(0, 0, 0, 0.25));
  }
`

export const Header = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 1000px){
    flex-direction: row;
    align-items: flex-start;
  }
`

export const ProductInformations = styled.div`
  box-sizing: border-box;

  width: 100%;
  
  margin-bottom: 20px;

  @media(min-width: 1000px){
    margin-bottom: 0px;
  }

  .product__categories{
    box-sizing: border-box;

    width: 100%;

    margin-bottom: 10px;

    display: flex;
    flex-wrap: wrap;
  }

`

export const Category = styled.p`
  box-sizing: border-box;

  padding: 5px 10px;
  margin: 5px;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  font-family: 'Raleway';
  font-weight: 600;
  font-size: 12px;

  color: #1A1A1A;
`

export const Promotion = styled.p`
  box-sizing: border-box;

  font-family: 'Inter';
  font-weight: 500;
  font-size: 12px;

  color: #1A1A1A;

  text-decoration: line-through;

  margin: 10px 0px 0px 5px;
`

export const Price = styled.div`
  box-sizing: border-box;

  height: 50px;

  display: flex;
  align-items: flex-end;

  margin: 10px 0px 0px 5px;

  .price__real{
    box-sizing: border-box;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;

    color: #1A1A1A;

    align-self: flex-start;
  }

  .price__value{
    font-family: 'Scoth Brace';
    font-weight: 400;
    font-size: 40px;

    color: #1A1A1A;

    padding: 0px;
    margin-bottom: 9px;
  }

  .price__penny{
    box-sizing: border-box;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;

    color: #1A1A1A;
  }
`

export const CardHeader = styled.div`
  box-sizing: border-box;
`

export const CardFooter = styled.div`
  box-sizing: border-box;
`

