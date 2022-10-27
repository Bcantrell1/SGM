import {
	Box,
	Center,
	Container,
	Flex,
	Heading,
	Image,
	Stack,
	Text
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
      <Box
       position={"relative"}
       height={"350px"}
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
         "https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489592/my-uploads/qbovldgvbocu1pg9unrm.jpg"
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
      <Box
       position={"relative"}
       height={"350px"}
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
       SGM offers the highest quality installs ranging from hard scapes, walls, walk paths, 
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
      <Box
       position={"relative"}
       height={"350px"}
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
         "https://res.cloudinary.com/dq8kiqnty/image/upload/v1663901299/my-uploads/wklr8vth8xbzm3yw676u.jpg"
        }
       />
      </Box>
     </Flex>
    </Stack>
   </Container>
  </>
 );
}