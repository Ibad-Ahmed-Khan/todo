import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Kunafa = () => {
  return (
    <VStack w="full" h="100vh" align="center" justify="center">
        <Flex align="center" justify="center" >
  <Box bgImage="url('https://media.istockphoto.com/id/1342036627/vector/turkish-dessert-kunefe-or-kunafa.jpg?s=612x612&w=0&k=20&c=Q2IAbIMj6YyCi-Atndl4-DmtVvJDs8L_OQ7cr2IkMOQ=')"bgSize="cover"bgPosition="center"w="200px"h="200px"
  />
  <Text fontSize="5rem" fontWeight="bold" color="orange.600" >
    Kunafa House
  <Text textAlign="center" fontSize="1rem" color="gray.600" >          (بریانی کے بعد کچھ میٹھا ہو جائے۔)
</Text>
    </Text>
        </Flex>
</VStack>

  )
}

export default Kunafa