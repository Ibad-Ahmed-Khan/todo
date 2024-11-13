import { Box, Flex, Text } from "@chakra-ui/react";
import {
  FaCreditCard,
  FaShippingFast,
  FaLock,
  FaShieldAlt,
  FaGreaterThan,
} from "react-icons/fa";

const Security = () => {
  const Links = [
    { icon: <FaCreditCard />, link: "Save Payments" },
    { icon: <FaShippingFast />, link: "Secure Logistics" },
    { icon: <FaLock />, link: "Secure Privacy" },
    { icon: <FaShieldAlt />, link: "Purchase Protection" },
  ];

  return (
    <Flex
      align="center"
      justify="center"
      minW="full"
      minH="10rem"
      paddingBlock="2rem"
    >
      <Flex
        w="full"
        align="center"
        flexWrap="wrap"
        gap="2rem"
        p="4"
        marginInline="2rem"
        bg="#f5f5f3"
        pos="relative"
      >
        {Links.map((item, index) => {
          return (
            <Flex key={index} align="center" justify="center" gap="2px">
              <Box>{item.icon} </Box>
              <Text>{item.link} </Text>
            </Flex>
          );
        })}
        <Flex
          pos={{ base: "none", md: "none", lg: "absolute" }}
          right="4"
          align="center"
          justify="center"
          gap="2px"
        >
          <Text>Temu keeps you safe</Text>
          <Box>
            <FaGreaterThan />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Security;
