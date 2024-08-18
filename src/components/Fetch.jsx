import { Box, Text, Button, Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const Fetch = () => {
 

  const  data = [ {name:"meerab", age : 5,class : "one"},{name:"Minahil", age : 55,class : "six"},{name:"meerab", age : 5,class : "one"},{name:"Ali", age : 10,class : "five"},{name:"hamza", age : 15,class : "three"}, ]

  return (
    <Box>
      <Button mb={4}>
        Fetch Data
      </Button>
      Student name :
      {data.map((item,index) => {
        return <Flex>
            {item.class}
        </Flex>
      } )}
    </Box>
  )
}

export default Fetch
