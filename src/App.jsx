import { Flex } from "@chakra-ui/react"
import Todo from "./components/Todo"


function App() {

  return (
   <Flex style={{ 
    fontFamily: '"Kode Mono", monospace', 
    fontOpticalSizing: 'auto', 
    fontWeight: 'normal', 
    fontStyle: 'normal', 
    width: '99vw'
  }} paddingInline={{ base: '1rem', md: '2rem', lg: '3rem', xl: '3rem' }} gap="3rem" flexDirection="column" align="center" justify="start" pt="4rem"  >
     <Todo/>
     </Flex>
  )
}

export default App
