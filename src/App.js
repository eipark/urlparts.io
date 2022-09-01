import * as React from 'react'
import Nav from './Nav';
import Hero from './Hero';
import FeaturedCompanies from './FeaturedCompanies';
import FeaturedPosts from './FeaturedPosts';
import {
  Box,
} from '@chakra-ui/react';

const App = () => {
  return (
    <Box>
      <Nav />
      <Hero />
      <FeaturedCompanies />
      <FeaturedPosts />
    </Box>
  );
}

export default App;

//      <iframe src="https://parttimetech.substack.com/embed" width="480" height="320" style={{border:'1px', solid: '#EEE', background:'white'}} frameBorder="0" scrolling="no"></iframe>
