import {
	Avatar, Box, Container, Flex,
	Heading, Stack, Text, useColorModeValue
} from '@chakra-ui/react';
import { ReactNode } from 'react';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>What Our Clients Say</Heading>
          <Text>Meeting clients needs since 2019</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Reasonable Pricing</TestimonialHeading>
              <TestimonialText>
                Excellent work. He went above and beyond and prices were very reasonable, especially compared to other options. Really happy with the service.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/arica.jpg'
              }
              name={'Arica D.'}
              title={'Yelp'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Top Tier Service</TestimonialHeading>
              <TestimonialText>
                The best of the best! Resonable and honest estimate and the work was done in a timely manner. Will definitely be using Samsons for all future landscaping needs!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/graham.jpg'
              }
              name={'Graham A.'}
              title={'Yelp'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Courteous, Professional and Communicative</TestimonialHeading>
              <TestimonialText>
                What we liked the most (besides the quality work), was how they would check in along the way to insure we got what we wanted. It was a real pleasure to have worked with them. We would use them again in a heartbeat!
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                '/facebook.svg'
              }
              name={'Don Lively'}
              title={'Facebook'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
