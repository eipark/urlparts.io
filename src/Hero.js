import {
  Box,
  Button,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  Input,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiPlay } from 'react-icons/hi'
const Hero = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="24">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Stack
          direction={{
            base: 'column',
            lg: 'row',
          }}
          spacing={{
            base: '3rem',
            lg: '2rem',
          }}
          mt="8"
          align={{
            lg: 'center',
          }}
          justify="space-between"
        >
          <Box
            flex="1"
            maxW={{
              lg: '520px',
            }}
          >

            <Heading
              as="h1"
              size="xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
            
            Find
<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>
  part-time
</Text>
jobs in tech.

              </Heading>





            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
            </Text>
            <Stack
              direction={{
                base: 'column',
                md: 'row',
              }}
              spacing="4"
              mt="8"
            >
              <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
                Get Started
              </Button>

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
              Subscribe for the job alerts and the latest posts.
            </Text>
          </Stack>
          <Button size="lg" colorScheme="blue" type="submit">
            Subscribe
          </Button>

        </Stack>
            <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Not convinced about part-time work? 
              <Link href="#" textDecoration="underline">Read why the future of work isn't just remote, it's part-time.
              </Link>

            </Text>
          </Box>
          <Box
            pos="relative"
            w={{
              base: 'full',
              lg: '560px',
            }}
            h={{
              base: 'auto',
              lg: '560px',
            }}
          >
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{
                lg: '100%',
              }}
              objectFit="cover"
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhZHklMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
export default Hero
