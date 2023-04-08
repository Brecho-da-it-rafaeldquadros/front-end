import styled from 'styled-components'

export const StyledCompetence = styled.div`
  box-sizing: border-box;

  width: 96%;
  height: 180px;

  background: rgba(217, 217, 217, 0.2);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin: 2px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  svg{
    font-size: 40px;

    color: #D4A61C;

    margin-bottom: 15px;
  }

  h4{
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;

    text-align: center;

    color: #1A1A1A;

    margin-bottom: 15px;
  }

  p{
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;

    text-align: center;

    color: #1A1A1A;
  }
`
