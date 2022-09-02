import * as React from 'react'
import { useState } from 'react';
import {
  Box,
  Badge,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  Input,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HiPlay } from 'react-icons/hi';
import { isWebUri } from 'valid-url';
import URLParts from './URLParts';


const Hero = () => {
  const [url, setUrl] = useState('https://www.urlparts.io');
  // TODO: Should we just use built in URL object?
  const isValidUrl = !!isWebUri(url);


  return (
    <Box as="section" pt="16" pb="24" bgGradient='linear(to-b, white, blue.100, red.100)' >
        <Stack
          direction={{
            base: 'column',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="0"
          align={{
            lg: 'center',
          }}
          justify="space-between"
          textAlign="center"
        >
            <Heading
              as="h1"
              size="xl"
              color={mode('blue.600')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
                <Input
                  size="60px"
                  type="text"
                  name="email"
                  value={url}
                  required
                  isInvalid={!isValidUrl}
    errorBorderColor='crimson'
                  autoComplete="false"
                  onChange={e => setUrl(e.target.value)}
                />
            </Heading>
            {isValidUrl ?
              <URLParts url={url} /> :
              <Text>Invalid URL</Text>
            }

      </Stack>
    </Box>
  )
}
export default Hero
