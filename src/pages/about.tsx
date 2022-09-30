import {
	Box, Button, Divider, Flex, Grid, GridItem, Heading,
	Image,
	Link,
	Stack, Text,
	useBreakpointValue,
	useColorMode, VStack
} from '@chakra-ui/react';

export default function About() {
	const { colorMode } = useColorMode()
  return (
		<>
    <Stack maxH={'40vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'yellow.500',
                zIndex: -1,
              }}
							color={colorMode === 'light' ? '' : 'gray.300'}
							>
              Samson&apos;s
            </Text>
            <br />{' '}
            <Text color={'yellow.500'} as={'span'}>
              Grounds Maintenance
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Some text you want to overview your company theory or something like that. Let me know what you want here.
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'About Image'}
          objectFit={'cover'}
          src={
            'https://res.cloudinary.com/dq8kiqnty/image/upload/v1664405048/my-uploads/fvrirbjr4gfdd0yzncwl.jpg'
          }
        />
      </Flex>
    </Stack>
		<VStack maxW={'80vw'} marginInline={'auto'} marginBottom={'20px'} paddingTop="40px" spacing="2" alignItems="flex-start">
			<Heading as="h2">Samuel Arrebollo</Heading>
			<Text as="p" fontSize="lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
				pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
				imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
				sapien. Suspendisse placerat vulputate posuere. Curabitur neque
				tortor, mattis nec lacus non, placerat congue elit.
			</Text>
			<Text as="p" fontSize="lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
				pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
				imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
				sapien. Suspendisse placerat vulputate posuere. Curabitur neque
				tortor, mattis nec lacus non, placerat congue elit.
			</Text>
			<Text as="p" fontSize="lg">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
				condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
				pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
				imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
				sapien. Suspendisse placerat vulputate posuere. Curabitur neque
				tortor, mattis nec lacus non, placerat congue elit.
			</Text>
			<Box paddingTop={'20px'} paddingBottom={"20px"} width={'100%'}>
				<Divider />
			</Box>
			<Grid
				templateColumns={{
					base: 'repeat(1, 1fr)',
					sm: 'repeat(2, 1fr)',
					md: 'repeat(2, 1fr)',
				}}
				paddingBottom={"20px"}
				gap={4}>
				<GridItem colSpan={1}>
					<VStack alignItems="flex-start" spacing="20px">
						<Text fontSize="3xl" fontWeight="700">
							Some Title Place holder of your choosing
						</Text>
						<Button colorScheme="yellow" backgroundColor={"yellow.500"} _hover={{backgroundColor: "yellow.500"}} size="md">
							<Link href="/contact">
								Contact Us
							</Link>
						</Button>
					</VStack>
				</GridItem>
				<GridItem>
					<Flex>
						<Text>
							Provide your customers a story they would enjoy keeping in mind
							the objectives of your website. Pay special attention to the tone
							of voice.
						</Text>
					</Flex>
				</GridItem>
			</Grid>
		</VStack>
	</>
  );
}