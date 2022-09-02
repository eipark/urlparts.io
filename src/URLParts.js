import * as React from 'react'
import {
  Text,
  Box,
  Badge,
  HStack,
  VStack,
} from '@chakra-ui/react';
import tlds from 'tlds';

const getParsedUrlArray = (url) => {
  const urlObj = new URL(url);
  const {
    protocol,
    search,
    pathname,
    origin,
  } = urlObj;
  const anchor = urlObj.hash.substr(1);

  return [
    {
      value: protocol,
      name: 'Protocol',
      description: 'Something about the protocol',
    },
    {
      value: pathname,
      name: 'Path name',
      description: 'Something about the path name',
    },
    {
      value: origin,
      name: 'Origin',
      description: 'Something about the origin',
    },
    {
      value: anchor,
      name: 'anchor',
      description: 'Something about the anchor',
    },
    {
      value: search,
      name: 'Search params',
      description: 'Something about the search',
    },

  ];
}

const renderPart = (part) => {
  // if blank string do we want this to be falsy here?
  if (!part.value) {
    return;
  }

  return (
    <VStack key={part.name}>
      <Text>{part.value}</Text>
      <Badge>{part.name}</Badge>
    </VStack>
  );
};

const URLParts = ({url}) => {
  const parsedUrlArray = getParsedUrlArray(url);
  // ordered map
  return (
    <Box>
      <HStack>
        {parsedUrlArray.map(renderPart)}
      </HStack>
    </Box>
  );
};

export default URLParts;
