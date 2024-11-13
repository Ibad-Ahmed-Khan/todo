import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaBolt, FaGreaterThan } from "react-icons/fa";
import SpiderWeb from "../assets/spiderweb1.png";

const Banner = () => {
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
      justify="center"
      gap="2rem"
      color="#fff"
      bg="#fba832"
      p="2rem"
      boxShadow="lg"
      wrap="wrap"
      _hover={{ bg: "#f5a623", boxShadow: "xl" }} // Hover effect for the entire banner
      transition="all 0.3s ease"
      pos="relative"
      overflow="hidden"
    >
      <Img maxW="4rem" pos="absolute" left="0" top="0" src={SpiderWeb} />
      <Img
        maxW="4rem"
        pos="absolute"
        right="0"
        top="0"
        transform="rotate(-100deg)"
        src={SpiderWeb}
      />
      <Flex align="center" gap="0.5rem">
        <FaBolt fontSize="1.4rem" />
        <Heading
          style={{ fontFamily: '"Creepster", sans-serif' }}
          fontSize="xl"
          fontWeight="bold"
        >
          Lightning Deals
        </Heading>
      </Flex>
      <Text fontSize="lg" fontWeight="bold">
        Ends in
      </Text>
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
            }} // Hover effect for individual time units
            transition="all 0.3s ease"
          >
            {timeLeft[unit]}
            {unit[0]}
          </Box>
        ))}
        <FaGreaterThan
          fontSize="1.5rem"
          _hover={{ transform: "scale(1.2)", color: "#fff" }} // Hover effect for the arrow
          transition="all 0.3s ease"
        />
      </Flex>
    </Flex>
  );
};

export default Banner;
