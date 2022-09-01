import React from 'react';
import { Button } from '@chakra-ui/react';
import logoImg from "./img/logo.png";
import {
  HStack,
  Heading,
} from '@chakra-ui/react'


export const Logo = props => {
  return (
    <HStack>
      <img src={logoImg}  width={"50px"}/>
      <Heading fontSize="xl">
        Part-Time Tech
      </Heading>
    </HStack>
  );
};
