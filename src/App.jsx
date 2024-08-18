import { Flex } from "@chakra-ui/react"
import Todo from "./components/Todo"


function App() {

  return (
   <Flex style={{
  fontFamily: '"Shadows Into Light", cursive',
  fontWeight: 400,
  fontStyle: 'normal',
  width: '99vw',
  minHeight: '100vh',
  letterSpacing: '2px',
  opacity : "1",
  backgroundImage: 'linear-gradient(to right, #fff1eb , #ace0f9 100%)'
}}

   paddingInline={{ base: '1rem', md: '2rem', lg: '3rem', xl: '3rem' }}
    gap="3rem" flexDirection="column" align="center" justify="start" pt="4rem" pb="6rem"  >
     <Todo/>
     </Flex>
  )
}

export default App
