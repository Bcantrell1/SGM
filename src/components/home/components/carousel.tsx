import {
	Box, Container, Heading, IconButton, Stack, useBreakpointValue
} from '@chakra-ui/react';
import { useState } from 'react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  const [slider, setSlider] = useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const caroSlides = [
		{
			title: 'SGM making your yard the envy of your neighborhood!',
			image: 'https://res.cloudinary.com/dq8kiqnty/image/upload/v1667508565/my-uploads/ahfcjdfyzizye68dk0zh.jpg'
		},
    {
      title: 'Using the highest quality turf available made in the USA!',
      image: 'https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489540/my-uploads/gkrspjahyqwuf5rmp8sr.jpg',
    },
    {
      title: 'Putting greens for the recreational golfer and pros!',
      image: 'https://res.cloudinary.com/dq8kiqnty/image/upload/v1664489592/my-uploads/qbovldgvbocu1pg9unrm.jpg',
    },
    {
      title: 'Artificial turf means minimal maintenance year around!',
      image: 'https://res.cloudinary.com/dq8kiqnty/image/upload/v1667865119/my-uploads/IMG_2725_yiiaxh.jpg'
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'100%'}
      overflow={'hidden'}
			>

      {/* CSS files for react-slick load only on slider files*/}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      {/* Caro Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {caroSlides.map((slide, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${slide.image})`}
						> 
						           
            {/* This is the block you need to change, to customize the caption */}
            <Container padding={'0px'} size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                position="absolute"
                top="50%"
								display={'flex'}
								justifyContent={'center'}
                transform="translate(0, -50%)">
                <Heading color="white" textAlign={'center'} textShadow='3px 3px 8px #000000' fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }}>
                  {slide.title}
                </Heading>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>

    </Box>
  );
}
