import { ReactNode } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

const Logo = () => {
  return (
    <Image src="/SGM_LOGO.png" height={50} width={170} />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function() {

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Link href={'/'}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
            </Link>
            <Text fontSize={'sm'}>
              © 2022 SGM. All rights reserved
            </Text>
          </Stack> 
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
            <Link href={'/partners'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'/terms-of-service'}>Terms of Service</Link>
            <Link href={'/privacy-policy'}>Privacy Policy</Link>
            <Link href={'/accessibility'}>Accessibility</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
