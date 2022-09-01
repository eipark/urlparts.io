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

const posts = [
  {
    id: '1',
    title: "The future of work isn't just remote, it's part-time",
    url: "https://parttimetech.substack.com/p/the-future-of-work-isnt-just-remote?utm_source=pttsite",
    imgUrl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F9506dbf2-c1c7-4173-8340-fdb7a42b10bd_3026x1484.png"
  },
  {
    id: '2',
    title: "The Easiest Part-Time Tech Job to Get",
    url: "https://parttimetech.substack.com/p/easiest-part-time-tech-job?utm_source=pttsite",
    imgUrl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F724b0f22-9ff0-49c5-ae6c-2ad28d63514d_888x499.jpeg"
  },
  {
    id: '3',
    title: "The future of work isn't just remote, it's part-time",
    title: "Diversify your (work) portfolio",
    url: "https://parttimetech.substack.com/p/diversify-your-work-portfolio?utm_source=pttsite",
    imgUrl: "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F2e008526-0047-46f3-8659-fb4d0990eb58_640x360.jpeg",
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
        Read
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
        {posts.map((post) => (
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

              <Link href={post.url}>
                  <Box overflow="hidden">
                    <Image
                      src={post.imgUrl}
                      alt={post.title}
                      width="full"
                      height="15rem"
                      objectFit="cover"
                    />
                  </Box>
                </Link>
                  <Text p="3" fontWeight={"bold"}>{post.title}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)

export default FeaturedPosts;
