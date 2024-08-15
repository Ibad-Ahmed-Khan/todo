import { Text,Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Main = () => {

    const [input,setInput ] = useState(0)

const decrement = () => {
    setInput( (prev) => prev -1  )
}


const increment = () => {
    setInput((prev) => prev + 1 )
}

  return (
    <Flex align="center" justify="center"  gap="1.4rem" >
        <Button onClick={decrement  }  textTransform="capitalize"  >derement</Button>
        <Text>{input}</Text>
        <Button onClick={increment  } textTransform="capitalize"  >increment</Button>
    </Flex>
  )
}

export default Main