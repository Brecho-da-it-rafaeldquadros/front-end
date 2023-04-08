import styled from 'styled-components'

export const StyledList = styled.div`
  box-sizing: border-box;

  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;

  .list__title {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 14px;

    color: #FFFFFF;
  }

  .list__nav {
    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    button{
      box-sizing: border-box;

      width: auto;

      padding: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      border: none;

      background-color: transparent;

      border-radius: 4px;

      font-family: 'Inter';
      font-weight: 500;
      font-size: 12px;

      cursor: pointer;

      color: #C7C7CC;

      margin: 2px 0px;

      :hover{
        background: #0404042e;
      }
    }
  }
`
