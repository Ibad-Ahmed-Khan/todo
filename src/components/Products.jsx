import { Flex, Text, Box, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error fetching products!</Text>;
  }

  return (
    <Flex flexWrap="wrap" align="center" justify="center" p="4" gap="2rem">
      {products.map((product) => (
        <Flex
          flexDir="column"
          key={product.id}
          p="4"
          minW="18rem"
          maxW="18rem"
          borderWidth="1px"
          borderRadius="md"
          mb="4"
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "lg",
            backgroundColor: "#f7fafc",
            transition: "all 0.3s ease",
          }} // Hover effect for product cards
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            borderRadius="md"
            objectFit="contain"
            boxSize="200px"
          />
          <Flex align="center" justify="space-between" pt="1rem">
            <Text fontSize="xl" fontWeight="bold">
              $
              {(
                product.price -
                (product.price * product.discountPercentage) / 100
              ).toFixed(2)}
            </Text>
            <Text color="gray" fontSize="sm" textDecoration="line-through">
              ${product.price}
            </Text>
            <Text color="gray" fontSize="sm">
              {product.minimumOrderQuantity} sold
            </Text>
            {Math.round(product.discountPercentage) !== 0 && (
              <Text
                color="red"
                border="1px solid red"
                paddingInline="2"
                borderRadius="sm"
                fontSize="sm"
                _hover={{
                  color: "#fff",
                  backgroundColor: "red",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                {Math.round(product.discountPercentage)}%
              </Text>
            )}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Products;
