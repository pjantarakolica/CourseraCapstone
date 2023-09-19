
import './App.css';
import Header from "./Header"
import Homepage from "./Homepage";
import Booking from "./Booking";

import { ChakraProvider } from '@chakra-ui/react';
import { Box, HStack, VStack } from "@chakra-ui/react";
import { Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
        <Box height={16} />
      <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      </>
      </main>
    </ChakraProvider>
  );
}

export default App;
