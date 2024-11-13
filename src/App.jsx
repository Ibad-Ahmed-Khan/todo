import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Security from "./components/Security";
import Products from "./components/Products";
import Banner from "./components/Banner";
import HeaderTop from "./components/HeaderTop";

function App() {
  return (
    <Flex
      flexDir="column"
      w="100vw"
      style={{ fontFamily: '"Sour Gummy", sans-serif' }}
    >
      <HeaderTop />
      <Header />
      <Home />
      <Security />
      <Banner />
      <Products />
    </Flex>
  );
}

export default App;
