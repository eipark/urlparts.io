import React, { StrictMode } from 'react';
import {
  ColorModeScript,
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Nav from './Nav';
import Hero from './Hero';
import ForceLightMode from './ForceLightMode';
import { theme } from '@chakra-ui/pro-theme'
import {
  Outlet
} from "react-router-dom";

const App = () => {
  return (
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ForceLightMode>
        <ColorModeScript initialColorMode='light' />
        <Nav />
        <Outlet />
      </ ForceLightMode>
    </ChakraProvider>
  </StrictMode>
  );
}

export default App;

//      <iframe src="https://parttimetech.substack.com/embed" width="480" height="320" style={{border:'1px', solid: '#EEE', background:'white'}} frameBorder="0" scrolling="no"></iframe>
