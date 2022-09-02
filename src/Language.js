import * as React from 'react'
import {
  Text,
  Box,
  Badge,
  HStack,
  VStack,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/react';

const Language = ({ lang, url }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <img src={lang.imgUrl} width="30px" />
            {lang.name}
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        {lang.name} more stuff
      </AccordionPanel>

    </AccordionItem>

  );
}

export default Language;
