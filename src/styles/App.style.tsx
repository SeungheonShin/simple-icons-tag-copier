import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  
  * {
    padding: 0;
  }
  
  body {
    background-color: rgb(255, 255, 255);
  }

  button {
    border: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
    &:active {
      background-color: rgba(0, 0, 0, 0.1);
    }
    background-color: rgb(255, 255, 255);
  }
  
  input[type=search] {
    border: none;
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 1);
    &:focus {
      outline: none;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 1);
    }
  }
`;

export const MainContent = styled.div`
  width: 300px;
  height: 450px;
  overflow-x: hidden;
  overflow-y: scroll;

  padding: 10px;
  margin: 0;
`;

export const Header = styled.header`
  height: 10vh;
  width: 50%;

  padding: 15px 0;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin: 0 auto;
  width: 80%;
`;

export const styles = {
  GlobalStyle,
  MainContent,
  Header,
  Section,
};
