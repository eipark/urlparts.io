import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './Logo'

const newsletterUrl = "https://parttimetech.substack.com/";
const App = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })
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
          base: '4',
          lg: '5',
        }}
      >
        <Container>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <HStack spacing="10">
                <ButtonGroup variant="link" spacing="8">
                  <Button>Jobs</Button>
                  <Button>Companies</Button>
                  <Button onClick={() => {window.open(newsletterUrl, '_blank')}}>Newsletter</Button>
                </ButtonGroup>
                  <Button variant="primary" py="5" px="6" my="-5" borderRadius="3">
                    Add your company
                  </Button>
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
