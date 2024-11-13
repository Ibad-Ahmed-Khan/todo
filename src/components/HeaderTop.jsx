import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  FaAppStore,
  FaBolt,
  FaGreaterThan,
  FaMobile,
  FaRegObjectUngroup,
  FaShippingFast,
  FaUndo,
} from "react-icons/fa";

const HeaderTop = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-11-16T00:00:00");

    const updateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };
    const timer = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex
      align="center"
      justify="space-around"
      gap="2rem"
      color="#fff"
      bg="#000"
      p="1rem"
      boxShadow="lg"
      wrap="wrap"
      transition="all 0.3s ease"
    >
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        align="center"
        justify="center"
        gap="1rem"
      >
        <FaShippingFast />
        <Text>free shipping on all orders</Text>
        <Flex align="center" gap="1rem">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <Box
              key={index}
              color="#000"
              bg="#fff"
              p="0.5rem"
              borderRadius="md"
              fontSize="lg"
              fontWeight="bold"
              _hover={{
                bg: "#ff9e1b",
                transform: "scale(1.1)",
                boxShadow: "md",
              }}
              transition="all 0.3s ease"
            >
              {timeLeft[unit]}
              {unit[0]}
            </Box>
          ))}
        </Flex>
      </Flex>
      <Flex align="center" justify="center" gap="1rem">
        <FaUndo />
        <Text>free return with 90 days</Text>
      </Flex>

      <Flex align="center" justify="center" gap="1rem">
        <FaMobile />
        <Text>get the tempu app</Text>
      </Flex>
    </Flex>
  );
};

export default HeaderTop;
