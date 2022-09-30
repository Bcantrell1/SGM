import {
	Box,
	Container, Link,
	SimpleGrid,
	Stack,
	Text, useColorModeValue
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactNode } from 'react';

const Logo = () => {
  return (
    <Image src="/SGM_LOGO.png" height={50} width={170} alt={'SGM Logo'} />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {

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
                <Logo />
              </Box>
            </Link>
            <Text fontSize={'sm'}>
              © 2022 SGM. All rights reserved
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'/gallery'}>Gallery</Link>
            <Link href={'/services'}>Services</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/about'}>About</Link>
            <Link href={'/contact'}>Contact</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link target={'_blank'} href={'https://www.facebook.com/people/Samsons-Grounds-Maintenance/100057789394406/'}>Facebook</Link>
            <Link target={'_blank'} href={'https://www.instagram.com/slamminsamson914/?hl=en'}>Instagram</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
