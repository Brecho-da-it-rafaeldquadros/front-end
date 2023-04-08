import styled from 'styled-components'

export const StyledProduct = styled.div`
  box-sizing: border-box;

  transition: 200ms;

  width: 96%;
  max-width: 260px;
  min-width: 210px;

  overflow: hidden;

  border-radius: 4px;
`

export const Figure = styled.figure`
  box-sizing: border-box;

  transition: 200ms;

  width: 100%;
  height: 280px;

  cursor: pointer;

  filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25));

  display:flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;

  background-color: #FFF;

  overflow: hidden;

  :hover{
    transition: 200ms;

    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25));
  }

  img{
    width: 100%;
  }
`

export const Brand = styled.span`
  box-sizing: border-box;

  width: 100%;
  
  padding: 10px;

  display: flex;
  justify-content: center;

  font-family: 'Raleway';
  font-weight: 600;
  font-size: 14px;

  color: #D4A61C;
`

export const Header = styled.div`
  box-sizing: border-box;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  h4{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 16px;

    color: #1A1A1A;
  }
`

export const Description = styled.p`
  box-sizing: border-box;

  width: 100%;
  max-height: 58px;

  margin: 10px 0px;

  font-family: 'Raleway';
  font-weight: 400;
  font-size: 12px;

  text-align: center;

  color: #1A1A1A;

  white-space:pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  }

  .price__penny{
    box-sizing: border-box;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;

    color: #1A1A1A;

    margin-bottom: 5px;
  }
`