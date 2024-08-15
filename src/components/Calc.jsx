import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Calc = () => {
    const  [isNumber,setIsNumber] = useState([])

    const handleIsNumber = (value) => {
        setIsNumber([...isNumber,value]);
        console.log([...isNumber,value])

    };

const handleIsClear = () => {
    setIsNumber([])
}

    const handleEqual = () => {
        
            let result = eval(isNumber.join(""));
            setIsNumber(result)
            console.log(result)
}

     const handleCross = () => {
        let newArr = [...isNumber]
        newArr.pop()
        console.log([...newArr])    
        setIsNumber([...newArr])
}
  return (


    <Box w="16rem">
        <Flex align="center" justify="center"  h="full" flexDirection="column" >
            <Flex flexDirection="row-reverse" pr="0.3rem"  border="1px solid " w="full" h="6rem">
                <SimpleGrid column="2" >
                <Flex align="center" justify="end" opacity="0.8" fontSize="1.3rem" ></Flex>
                <Flex align="center" justify="end" fontSize="2rem" > {isNumber} </Flex>
                
                </SimpleGrid>
            </Flex>
            <Flex  flexWrap="wrap" >
                <Button bg="blue.100"  onClick={() => handleIsNumber(1) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >1</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(2) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >2</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(3) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >3</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber("+") } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >+</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(4) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >4</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(5) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >5</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(6) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >6</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber("-") } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >-</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(7) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >7</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(8) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >8</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(9) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >9</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber("*") } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >*</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(".") } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >.</Button>
                <Button bg="blue.100"  onClick={() => handleIsNumber(0) } minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >0</Button>
                <Button bg="blue.100"  onClick={handleEqual}  minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >=</Button>
                <Button bg="blue.100" onClick={() => handleIsNumber("/") }  minW="4rem" minH="4rem" border="1px solid" borderRadius="none" >/</Button>
                <Flex w="50%" >
                <Button bg="blue.100"  onClick={handleIsClear}  minW="full" minH="4rem" border="1px solid" borderRadius="none" >C</Button>
                <Button bg="blue.100"  onClick={handleCross}  minW="full" minH="4rem" border="1px solid" borderRadius="none" >×</Button>
                </Flex>
            </Flex>
        </Flex>
        </Box>
  )
}

export default Calc