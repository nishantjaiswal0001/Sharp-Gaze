import React from "react";
import {
  Box,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
  const [slider, setSlider] = React.useState(null);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const height = useBreakpointValue({
    base: "450px",
    sm: "500px",
    md: "600px",
    lg: "700px",
  });

  const cards = [
    {
      id: 1000,
      title: "Shopping at Sharp Gaze",
      text: "Here are Men's, Women's Clothes and Shoes Collections, where you can buy high-performance sportswear at great prices.",
      image:
        "https://png.pngtree.com/thumb_back/fw800/background/20201010/pngtree-black-friday-sale-background-design-template-banner-discount-vector-poster-business-image_407567.jpg",
    },
  ];

  return (
    <Box position="relative" height={height} width="full" overflow="hidden">
      {/* react-slick styles */}
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

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card) => (
          <Box
            key={card.id}
            height={height}
            color="whitesmoke"
            background="url(/view-gym-room-training-sports.jpg) center/cover no-repeat"
            position="relative"
          >
            <Container
              maxW="container.xl"
              h="100%"
              px={{ base: 4, md: 8 }}
              py={{ base: 4, md: 6 }}
              position="relative"
            >
              <Stack
                spacing={6}
                maxW={{ base: "100%", md: "lg" }}
                position="absolute"
                top="50%"
                transform="translateY(-50%)"
                px={{ base: 2, md: 4 }}
              >
                <Heading
                  fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
                  lineHeight="short"
                >
                  {card.title}
                </Heading>
                <Text
                  fontSize={{ base: "sm", md: "md", lg: "lg" }}
                  color="whiteAlpha.900"
                >
                  {card.text}
                </Text>

                <Flex
                  wrap="wrap"
                  gap={4}
                  justify={{ base: "center", md: "flex-start" }}
                >
                  <Button
                    size="sm"
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/men">MENS SHOP</Link>
                  </Button>
                  <Button
                    size="sm"
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/women">WOMENS SHOP</Link>
                  </Button>
                  <Button
                    size="sm"
                    bg="black"
                    color="whitesmoke"
                    _hover={{
                      border: "1px solid black",
                      background: "none",
                      color: "blue",
                    }}
                  >
                    <Link to="/shoes">SPORTS KIT</Link>
                  </Button>
                </Flex>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
