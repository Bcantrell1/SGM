import {
	Box, Button, Divider, Flex, Grid, GridItem, Heading,
	Image,
	Link, SimpleGrid, Stack, Text,
	useColorMode, VStack
} from '@chakra-ui/react';
import Head from 'next/head';

export default function About() {
	const { colorMode } = useColorMode()
  return (
		<>
			<Head>
				<title>
					About | Samson`s Grounds Maintenance | Tucson, AZ
				</title>
				<meta name="description" content="About Us. Learn a little about who we are and what we do here at Samson's Grounds Maintenance." />
			</Head>
			<Box minHeight={'calc(100vh - 200px)'}>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
				<Flex p={8} flex={1} align={'center'} justify={'center'}>
					<Stack spacing={6} w={'full'} maxW={'lg'}>
						<Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
							<Text
								as={'span'}
								position={'relative'}
								_after={{
									content: "''",
									width: "full",
									height: "8%",
									position: "absolute",
									bottom: 1,
									left: 0,
									bg: "yellow.500",
									zIndex: -1,
									borderRadius: "500px",
								}}
								fontStyle={'italic'}
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
								SGM specializes in helping Tucsonans and surrounding areas achieve the landscape of their dreams! Getting things done right the first time! 
						</Text>
					</Stack>
				</Flex>
				<Flex flex={1} align={'center'} justify={'start'}>
					<Image
						alt={'About Image'}
						objectFit={'fill'}
						maxH={'500px'}
						width={'100%'}
						maxWidth={'800px'}
						src={
							'https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489637/my-uploads/b2uqfvdlddsu1hky3mt6.jpg'
						}
					/>
				</Flex>
			</SimpleGrid>
			<VStack maxW={'80vw'} marginInline={'auto'} marginBottom={'20px'} paddingTop="40px" spacing="2" alignItems="flex-start">
				<Heading as="h2">About <Text as={'span'} color={'yellow.500'}>US</Text></Heading>
				<Text as="p" fontSize="lg" maxWidth={'800px'}>
					SGM specializes in helping Tucson and surrounding areas achieve the landscape 
					of their dreams! In doing so we increase the value, and add 
					curb appeal to both residential and commercial properties!
				</Text>
				<Text as="p" fontSize="lg" maxWidth={'800px'}>
					Having trouble deciding exactly what you want? Our team has years of experience 
					with design and can assist you with ideas and recommendations on your future project. 
					We also offer 3-D rendering so you can see what your project will look like before we 
					commence installation! 
				</Text>
				<Text as="p" fontSize="lg" maxWidth={'800px'}>
					Here at SGM we take pride in every install which can be seen in our services from start to finish. Doing things right the first time, and 
					doing the right thing no matter the circumstances!
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
								Ready to get started on your own personal oasis?
							</Text>
							<Button colorScheme="yellow" backgroundColor={"yellow.500"} _hover={{backgroundColor: "yellow.500"}} size="md">
								<Link href="/contact">
									Contact Us
								</Link>
							</Button>
						</VStack>
					</GridItem>
					<GridItem>
						<Flex justifyContent={'flex-end'}>
						<Link href={'tel:+15206682281'}><Box><Image src="/SGM_LOGO.png" height={50} width={170} alt={'SGM Logo'} /></Box></Link>
						</Flex>
					</GridItem>
				</Grid>
			</VStack>
		</Box>
	</>
  );
}