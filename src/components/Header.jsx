import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  IconButton,
  Img,
} from "@chakra-ui/react";
import Flag from "../assets/america.webp";

import Logo from "../assets/logo.png";

import { useState } from "react";
import {
  FaFacebookMessenger,
  FaSearch,
  FaStar,
  FaThumbsUp,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LinksLeft = [
    { icon: <FaThumbsUp />, link: "Best Sellers" },
    { icon: <FaStar />, link: "5 Star Rated" },
    { icon: "", link: "New Arrivals" },
    { icon: "", link: "Categories" },
  ];

  const LinksRight = [
    { icon: <FaUser />, title: "Orders& Account" },
    { icon: <FaFacebookMessenger />, title: "" },
    {
      icon: (
        <img
          src={Flag}
          alt="Flag"
          style={{ borderRadius: "50%", width: "24px", height: "24px" }}
        />
      ),
      title: "EN",
    },
    { icon: <FaShoppingCart />, title: "Cart" },
  ];

  return (
    <Flex
      minW="full"
      minH="5rem"
      flexDir={{ base: "column", lg: "row" }}
      align="center"
      justify="center"
      gap="3rem"
      p="4"
      fontWeight="bolder"
      color="#fff"
      bg="#ce7800"
      pos="sticky"
      top="0"
      zIndex="999999999"
    >
      <Img src={Logo} w="4rem" />

      {/* Desktop View */}
      <Flex display={{ base: "none", lg: "flex" }} align="center" gap="2rem">
        <Flex gap="1rem">
          {LinksLeft.map((item, index) => (
            <Flex key={index} align="center" justify="center" gap="2px">
              <Box>{item.icon}</Box>
              <Text
                fontSize="sm"
                cursor="pointer"
                _hover={{ color: "#fff", textDecoration: "underline" }}
              >
                {item.link}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex display={{ base: "none", lg: "flex" }} align="center" gap="1.5rem">
        <InputGroup minW={{ lg: "16rem", xl: "20rem" }}>
          <Input
            placeholder="Womens Dresses"
            minH="3rem"
            borderRadius="7rem"
            color="#000"
            bg="#fff"
            _hover={{ bg: "#f2f2f2" }}
            _focus={{ borderColor: "#ce7800", boxShadow: "0 0 0 1px #ce7800" }}
          />
          <InputRightElement
            mr="4px"
            mt="4px"
            children={<FaSearch />}
            borderRadius="50%"
            color="#fff"
            bg="#000"
            cursor="pointer"
            p="2"
            _hover={{ bg: "#f2f2f2", color: "#ce7800" }}
          />
        </InputGroup>

        <Flex gap="1.5rem">
          {LinksRight.map((item, index) => (
            <Flex
              key={index}
              align="center"
              justify="center"
              cursor="pointer"
              _hover={{
                color: "#fff",
                transform: "scale(1.1)",
                transition: "0.2s",
              }}
            >
              <Box w="2rem">{item.icon}</Box>
              {item.title && <Text fontSize="sm">{item.title}</Text>}
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Mobile Menu Toggle Button */}
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        top="1.1rem"
        right="1rem"
        zIndex="999"
      >
        <IconButton
          border="2px solid "
          icon={isOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
          fontSize="2xl"
          color="#fff"
          bg="transparent"
          _hover={{
            border: "none",
            transform: "scale(1.2)",
            transition: "0.2s",
          }}
          _active={{ border: "none" }}
        />
      </Box>

      {/* Mobile Menu */}
      <Flex
        minW="full"
        minH="100vh"
        pos="absolute"
        top="0"
        left="0"
        transform={isOpen ? "scaleY(1)" : "scaleY(0)"}
        transformOrigin="top"
        transition="transform 0.3s ease"
        direction="column"
        align="center"
        justify="center"
        bg="#ce7800"
        p="4"
        color="#fff"
      >
        {/* Left Links */}
        <Flex minW="full" direction="column" gap="1rem">
          {LinksLeft.map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap="0.5rem"
              cursor="pointer"
              _hover={{
                color: "#fff",
                transform: "scale(1.05)",
                transition: "0.2s",
              }}
            >
              {item.icon && <Box>{item.icon}</Box>}
              <Text fontSize="lg">{item.link}</Text>
            </Flex>
          ))}
        </Flex>

        {/* Search Bar */}
        <InputGroup marginBlock="4">
          <Input
            placeholder="Search products..."
            minH="3rem"
            borderRadius="full"
            color="#000"
            bg="#fff"
            _hover={{ bg: "#f2f2f2" }}
            _focus={{ borderColor: "#ce7800", boxShadow: "0 0 0 1px #ce7800" }}
          />
          <InputRightElement pt="2" pr="2">
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              color="#fff"
              bg="#000"
              borderRadius="full"
              p="2"
              _hover={{ bg: "#f2f2f2", color: "#ce7800" }}
            />
          </InputRightElement>
        </InputGroup>

        {/* Right Links */}
        <Flex minW="full" direction="column" gap="1rem">
          {LinksRight.map((item, index) => (
            <Flex
              key={index}
              align="center"
              gap="0.5rem"
              cursor="pointer"
              _hover={{
                color: "#fff",
                transform: "scale(1.05)",
                transition: "0.2s",
              }}
            >
              <Box>{item.icon}</Box>
              {item.title && <Text fontSize="lg">{item.title}</Text>}
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
