import React from 'react';
import {
  Button, Link,
} from '@chakra-ui/react';
import logoImg from "./img/logo.png";
import {
  HStack,
  Heading,
} from '@chakra-ui/react'
import {
  Link as RouterLink,
} from "react-router-dom";


export const Logo = props => {
  return (
      <Link
        as={RouterLink}
        to=""
        _hover={{
          textDecoration: 'none'
        }}
      >
    <HStack>
        <img src={logoImg}  width={"50px"}/>
        <Heading fontSize="xl">
          Part-Time Tech
        </Heading>
    </HStack>
      </Link>
  );
};
