import { Box, Button, Flex, Heading, Img } from "@chakra-ui/react";
import ImgOne from "../assets/img1.png";

const Home = () => {
  return (
    <Flex
      w="full"
      flexDir={{ base: "column", lg: "row" }}
      minH="20rem"
      align="center"
      justify="center"
      bg="#f9a92e"
    >
      <Flex w="50%" flexDir="column" textAlign="center">
        <Heading style={{ fontFamily: '"Creepster", sans-serif' }} color="#fff">
          Halloween
        </Heading>
        <Heading style={{ fontFamily: '"Creepster", sans-serif' }}>
          No trick all treat!
        </Heading>
        <Box>
          <Button
            borderRadius="none"
            _hover={{ bg: "#0008" }}
            _active={{ bg: "#000" }}
            color="#fff"
            bg="#000"
          >
            Shop Now
          </Button>
        </Box>
      </Flex>
      <Flex align="center" justify="center" w="50%">
        <Img maxW="20rem" src={ImgOne} />
      </Flex>
    </Flex>
  );
};

export default Home;
