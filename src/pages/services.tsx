import {
	Box,
	Center,
	Container,
	Flex,
	Heading,
	Icon,
	IconProps,
	Image,
	Stack,
	Text,
	useColorModeValue
} from "@chakra-ui/react";

export default function CallToActionWithVideo() {
 return (
  <>
   <Center paddingBlock={5}>
    <Heading
     lineHeight={1.1}
     fontWeight={600}
     fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
    >
     <Text
      as={"span"}
      position={"relative"}
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
     >
      Some of our services!
     </Text>
    </Heading>
   </Center>
   <Container maxW={"7xl"}>
    <Stack
     align={"center"}
     spacing={{ base: 8, md: 10 }}
     py={{ base: 20, md: 28 }}
     direction={{ base: "column", md: "row" }}
    >
     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
       lineHeight={1.1}
       fontWeight={600}
       fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
       <Text
        as={"span"}
        position={"relative"}
        _after={{
         content: "''",
         width: "full",
         height: "8%",
         position: "absolute",
         bottom: 1,
         left: 0,
         bg: "yellow.400",
         zIndex: -1,
				 borderRadius: "500px",
        }}
       >
        Sand Filled
       </Text>
       <br />
       <Text as={"span"} color={"yellow.400"}>
        Putting Greens
       </Text>
      </Heading>
      <Text color={"gray.500"}>
       One of the few in the tucson area, SGM offers professional install
			 and sand filled greens that gives the player the option to control ball
			 speeds, add breaks/slopes, and or bunkers. Our sand filled greens catch and release 
			 all your ship shots as a real green would.
      </Text>
     </Stack>
     <Flex
      flex={1}
      justify={"center"}
      align={"center"}
      position={"relative"}
      w={"full"}
     >
      <Blob
       w={"150%"}
       h={"150%"}
       position={"absolute"}
       top={"-20%"}
       left={0}
       zIndex={-1}
       color={useColorModeValue("yellow.400", "yellow.400")}
      />
      <Box
       position={"relative"}
       height={"300px"}
       rounded={"2xl"}
       boxShadow={"2xl"}
       width={"full"}
       overflow={"hidden"}
      >
       <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        src={
         "https://res.cloudinary.com/dq8kiqnty/image/upload/v1664056181/my-uploads/dnxzxqahbmjhcrmx1cmq.jpg"
        }
       />
      </Box>
     </Flex>
    </Stack>
    <Stack
     align={"center"}
     spacing={{ base: 8, md: 10 }}
     py={{ base: 20, md: 28 }}
     direction={{ base: "column-reverse", md: "row" }}
    >
     <Flex
      flex={1}
      justify={"center"}
      align={"center"}
      position={"relative"}
      flexDirection={"row-reverse"}
      w={"full"}
     >
      <Blob
       w={"150%"}
       h={"150%"}
       position={"absolute"}
       top={"-20%"}
       right={0}
       zIndex={-1}
       color={useColorModeValue("green.600", "green.500")}
      />
      <Box
       position={"relative"}
       height={"300px"}
       rounded={"2xl"}
       boxShadow={"2xl"}
       width={"full"}
       overflow={"hidden"}
      >
       <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        src={
         "https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489551/my-uploads/sagrlqxbxqal7ixilrmw.jpg"
        }
       />
      </Box>
     </Flex>
     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
       lineHeight={1.1}
       fontWeight={600}
       fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
       <Text
        as={"span"}
        position={"relative"}
        _after={{
         content: "''",
         width: "full",
         height: "8%",
         position: "absolute",
         bottom: 1,
         left: 0,
         bg: "green.500",
         zIndex: -1,
				 borderRadius: "500px",
        }}
       >
        Artificial
       </Text>
       <br />
       <Text as={"span"} color={"green.500"}>
        Turf
       </Text>
      </Heading>
      <Text color={"gray.500"}>
       SGM specializes in using artificial turf accommodating high foot traffic areas, 
			 kids, pets, with several turf types to choose from. We guarantee low maintenance
			 and hefty warranties on all our material! 
      </Text>
     </Stack>
    </Stack>
    <Stack
     align={"center"}
     spacing={{ base: 8, md: 10 }}
     py={{ base: 20, md: 28 }}
     direction={{ base: "column", md: "row" }}
    >
     <Stack flex={1} spacing={{ base: 5, md: 10 }}>
      <Heading
       lineHeight={1.1}
       fontWeight={600}
       fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
      >
       <Text
        as={"span"}
        position={"relative"}
        _after={{
         content: "''",
         width: "full",
         height: "8%",
         position: "absolute",
         bottom: 1,
         left: 0,
         bg: "red.400",
         zIndex: -1,
				 borderRadius: "500px",
        }}
       >
        Pavers
       </Text>
       <br />
       <Text as={"span"} color={"red.400"}>
        and Travertine
       </Text>
      </Heading>
      <Text color={"gray.500"}>
       SGM offers the highest quality installs ranging from hardscapes, walls, walk paths, 
			 and full on backyard kitchen and BBQs! Various different materials and options to fit 
			 any need imaginable. Call today to bring your vision to life. 
      </Text>
     </Stack>
     <Flex
      flex={1}
      justify={"center"}
      align={"center"}
      position={"relative"}
      w={"full"}
     >
      <Blob
       w={"150%"}
       h={"150%"}
       position={"absolute"}
       top={"-20%"}
       left={0}
       zIndex={-1}
       color={useColorModeValue("red.500", "red.400")}
      />
      <Box
       position={"relative"}
       height={"300px"}
       rounded={"2xl"}
       boxShadow={"2xl"}
       width={"full"}
       overflow={"hidden"}
      >
       <Image
        alt={"Hero Image"}
        fit={"cover"}
        align={"center"}
        w={"100%"}
        h={"100%"}
        src={
         "https://res.cloudinary.com/dq8kiqnty/image/upload/v1663892801/my-uploads/w7uih0brfuge1elreovy.jpg"
        }
       />
      </Box>
     </Flex>
    </Stack>
   </Container>
  </>
 );
}

export const Blob = (props: IconProps) => {
 return (
  <Icon
   width={"100%"}
   viewBox="0 0 578 440"
   fill="none"
   xmlns="http://www.w3.org/2000/svg"
   {...props}
  >
   <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
    fill="currentColor"
   />
  </Icon>
 );
};
