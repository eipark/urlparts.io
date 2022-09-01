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
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
const Hero = () => {
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
            Get curated
            <Text
              bgGradient='linear(to-l, #7928CA, #FF0080)'
              style={{display: "inline"}}
              bgClip='text'
              fontSize='6xl'
              fontWeight='extrabold'
            >
              &nbsp;part-time&nbsp;
            </Text>
            jobs in tech.
        </Heading>
        <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
            We're connecting tech talent with top companies who want to hire part-time.
            Achieve greater balance, find interesting roles, use your skills.
          </Text>
        </Stack>

        <Stack
          as="form"
          onSubmit={(e) => {
            e.preventDefault()
          }}
          direction={{ base: 'column', md: 'row' }}
          spacing="4"
          justify="center"
        >
          <Stack maxW={{ md: 'lg' }} width="full">
            <Input
              size="lg"
              type="email"
              required
              placeholder="Enter your email"
              autoComplete="false"
            />

            <Text fontSize="sm" textAlign={{ base: 'center', md: 'start' }} color="subtle">
              Insights on part-time tech and curated jobs. No spam, up to 2x/week.
            </Text>
          </Stack>
          <Button size="lg" colorScheme="blue" type="submit">
            Subscribe
          </Button>

        </Stack>
      </Stack>
    </Box>
  )
}
export default Hero
