import {
	Container, Flex,
	Heading, Icon, Image, SimpleGrid, Stack,
	StackDivider, Text, useColorModeValue
} from '@chakra-ui/react';

import { ReactElement } from 'react';
import { GiBrickWall, GiHighGrass, GiWarPick } from "react-icons/gi";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={10}
        h={10}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW={'7xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}> 
          <Heading >Samson&apos;s<br/> Grounds Maintenance</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            We specialize in assisting tucson and surrounding areas achieve the landscape of their dreams! Whether that requires some turf, a brand new sand filled putting green, or a full redesign!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={GiWarPick} color={'yellow.500'} w={6} h={6} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Complete Yard Transformation'}
            />
            <Feature
              icon={<Icon as={GiHighGrass} color={'green.500'} w={6} h={6} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Artificial Turf installation'}
            />
            <Feature
              icon={
                <Icon as={GiBrickWall} color={'red.500'} w={6} h={6} />
              }
              iconBg={useColorModeValue('red.100', 'red.900')}
              text={'Pavers & Travertine'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
						maxHeight={'500px'}
						width={'100%'}
            src={
              'https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489532/my-uploads/vku873whggq7xbz5wdzp.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
