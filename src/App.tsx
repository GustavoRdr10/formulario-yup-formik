import React from 'react';
import FormComponent from './Form';
import  { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    color: white;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <FormComponent />
    </>
  );
};

export default App;