import React from 'react';
import {
  Button, Link,
} from '@chakra-ui/react';
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
        <Heading fontSize="xl">
          urlparts.io
        </Heading>
    </HStack>
      </Link>
  );
};
