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
            <Logo />
        </Container>

      </Box>
      <Divider />
    </Box>
  )
}
export default App;
