import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { transform } from "framer-motion";
import { FaCaretUp } from "react-icons/fa";

const DropDown = () => {
  const Data = [
    { id: 1, name: "ibad", age: 22, email: "ibadahmedkhan@gmail.com" },
    { id: 2, name: "ubaid", age: 25, email: "ubaidahmedkhan@gmail.com" },
    { id: 3, name: "hamza", age: 23, email: "hamzaahmedkhan@gmail.com" },
  ];
  return (
    <Flex
      pt="5rem"
      flexDirection="column"
      id="DropDown"
      fontFamily="Protest Riot"
      align="center"
      h="100vh"
      color="white"
      bg="gray.300"
    >
      <Text fontSize="2xl" cursor="pointer" letterSpacing="2px">
        DropDown
      </Text>
      <VStack
        align="center"
        justify="center"
        w="full"
        h="full"
        fontWeight="200"
        color="#000"
      >
        <Flex align="center" justify="center" gap="3rem">
          {/* DROP DOWN # 1 STARTS */}

          <Flex
            flexDirection="column"
            h="0"
            _hover={{
              ".icon": {
                transform: "rotate(180deg)",
                color: "blue",
              },
              ".data": {
                transform: "scale(1,1)",
                bg: "#fff",
              },
              ".linkname": {
                color: "blue",
                textDecoration: "none",
              },
            }}
            align="center"
            justify="center"
            gap="5px"
          >
            <Flex align="center" justify="center">
              <Link
                className="linkname"
                fontSize="xl"
                transition="all .4s ease-in-out"
              >
                Categories
              </Link>
              <Box
                className="icon"
                as={FaCaretUp}
                cursor="pointer"
                fontSize="lg"
                transition="all .4s ease-in-out"
              />
            </Flex>
            <Box
              transform="scale(0,0)"
              className="data"
              transition="all .4s ease-in-out"
              w="full"
              pt="2"
              pb="2"
              paddingInline="1"
            >
              {Data.map((item, id) => {
                return (
                  <Text
                    p="2"
                    textTransform="uppercase"
                    _hover={{ bg: "rgba(0, 0, 255, 0.6)", cursor: "pointer" }}
                    transition="all .4s ease-in-out"
                    key={id}
                  >
                    {item.name}
                  </Text>
                );
              })}
            </Box>
          </Flex>
          {/* DROP DOWN # 2 STARTS */}
          <Flex
            flexDirection="column"
            w="full"
            h="0"
            _hover={{
              ".icon": {
                transform: "rotate(180deg)",
                color: "blue",
              },
              ".data": {
                transform: "scale(1,1)",
                bg: "#fff",
              },
              ".linkname": {
                color: "blue",
                textDecoration: "none",
              },
            }}
            align="center"
            justify="center"
            gap="5px"
          >
            <Flex align="center" justify="center">
              <Link
                className="linkname"
                fontSize="xl"
                transition="all .4s ease-in-out"
              >
                Categories
              </Link>
              <Box
                className="icon"
                as={FaCaretUp}
                cursor="pointer"
                fontSize="lg"
                transition="all .4s ease-in-out"
              />
            </Flex>
            <Box
              className="data"
              transform="scale(1,0)"
              transformOrigin="top"
              transition="all .4s ease-in-out"
              w="full"
              pt="2"
              pb="2"
              paddingInline="1"
            >
              {Data.map((item, id) => {
                return (
                  <Text
                    p="2"
                    textTransform="uppercase"
                    _hover={{ bg: "rgba(0, 0, 255, 0.6)", cursor: "pointer" }}
                    transition="all .4s ease-in-out"
                    key={id}
                  >
                    {item.name}
                  </Text>
                );
              })}
            </Box>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default DropDown;