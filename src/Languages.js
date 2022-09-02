import * as React from 'react'
import {
  Text,
  Box,
  Badge,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
} from '@chakra-ui/react';
import Language from './Language';

const langs = [
  {
    name: 'JavaScript',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'Java',
    imgUrl: 'https://w7.pngwing.com/pngs/958/636/png-transparent-java-computer-icons-c-others-leaf-monochrome-c-thumbnail.png'
  }
];

const Languages = ({ url }) => {
  return (
    <Box mt="8">
      <Accordion defaultIndex={[0]} allowMultiple>
        {langs.map(lang =>
          <Language url={url} lang={lang} key={lang.name}/>
        )}
      </Accordion>
    </Box>
  );
}

export default Languages;
