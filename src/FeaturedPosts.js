import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

const companies = [
  {
    id: '1',
    title: '2022 Developer Survey',
    image: 'https://tinyurl.com/4wzh2ph9',
  },
  {
    id: '2',
    title: 'Women in Tech',
    image: 'https://tinyurl.com/5czjdxj7',
  },
  {
    id: '3',
    title: 'Women in Tech',
    image: 'https://tinyurl.com/5czjdxj7',
  },
]

const FeaturedPosts = () => (
  <Container
    py={{
      base: '4',
      md: '8',
    }}
    width="100%"
  >
    <Stack
      spacing={{
        base: '2',
        md: '4',
      }}
    >
      <Text
        fontWeight="semibold"
        color="accent"
        fontSize={{
          base: 'sm',
          md: 'md',
        }}
      >
        Learn
      </Text>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        rowGap={{
        }}
        columnGap="8"
      >
        {companies.map((post) => (
          <Link
            key={post.id}
            _hover={{
              textDecor: 'none',
            }}
            role="group"
          >
            <Box
              p="0"
              bg="bg-surface"
              boxShadow={mode('lg', 'lg-dark')}
              _groupHover={{
                boxShadow: mode('xl', 'xl-dark'),
              }}
              transition="all 0.2s"
              height="full"
            >

                  <Box overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                    />
                  </Box>
                  <Heading p="3" size="xs">{post.title}</Heading>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)

export default FeaturedPosts;
