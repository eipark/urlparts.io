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
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt cillum dolore.',
    image: 'https://tinyurl.com/4wzh2ph9',
    category: 'Research',
    publishedAt: 'December 29, 2022',
    author: {
      name: 'Samy Tom',
      avatarUrl: 'https://tinyurl.com/2p8h98w8',
    },
  },
  {
    id: '2',
    title: 'Women in Tech',
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
    image: 'https://tinyurl.com/5czjdxj7',
    category: 'Community',
    publishedAt: 'November 30, 2022',
    author: {
      name: 'Angelina Gates',
      avatarUrl: 'https://tinyurl.com/2p98t7nh',
    },
  },
  {
    id: '3',
    title: 'Using Chakra UI in Sketch',
    excerpt:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla eiusmod tempor  pariatur.',
    image: 'https://tinyurl.com/yh2xkpzm',
    category: 'Design',
    publishedAt: 'October 31, 2022',
    author: {
      name: 'Busola Banks',
      avatarUrl: 'https://tinyurl.com/2p8fy9ym',
    },
  },
]

const FeaturedCompanies = () => (
  <Container
    py={{
      base: '16',
      md: '24',
    }}
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
        Featured Companies
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
              p="6"
              bg="bg-surface"
              boxShadow={mode('lg', 'lg-dark')}
              _groupHover={{
                boxShadow: mode('xl', 'xl-dark'),
              }}
              transition="all 0.2s"
              height="full"
            >
              <Stack
                spacing={{
                  base: '8',
                  lg: '16',
                }}
                justify="space-between"
                height="full"
              >
                <Stack spacing="8">
                  <Box overflow="hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                    />
                  </Box>
                  <Stack spacing="3">
                    <Text fontSize="sm" fontWeight="semibold" color="accent">
                      {post.category}
                    </Text>
                    <Heading size="xs">{post.title}</Heading>
                    <Text color="muted">{post.excerpt}</Text>
                  </Stack>
                </Stack>
                <HStack>
                  <Avatar src={post.author.avatarUrl} boxSize="10" />
                  <Box fontSize="sm">
                    <Text fontWeight="medium">{post.author.name}</Text>
                    <Text color="muted">{post.publishedAt}</Text>
                  </Box>
                </HStack>
              </Stack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)

export default FeaturedCompanies;
