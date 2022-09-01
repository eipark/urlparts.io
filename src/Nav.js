import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react'
import {
  Link as RouterLink,
  NavLink
} from "react-router-dom";
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './Logo'

const newsletterUrl = "https://parttimetech.substack.com/";
const App = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
  const activeStyle = {
    fontWeight: "bold",
  };
  return (
    <Box
      as="section"
      pb={{
        base: '0',
        md: '0',
      }}
    >
      <Box
        as="nav"
        bg="bg-surface"
        py={{
          base: '0',
          lg: '0',
        }}
      >
        <Container>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="10">
                  <Link
                    as={NavLink}
                    to=""
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    Home
                  </Link>
                  <Link
                    as={NavLink}
                    to="companies"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    For Companies
                  </Link>
                  <Link href={newsletterUrl} target="_blank">Blog</Link>>
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  )
}
export default App;
