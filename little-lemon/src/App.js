
import './App.css';
import theme from './Components/theme'
import Header from "./Header"
import Homepage from "./Homepage";
import Booking from "./Booking";
import Footer from "./Footer";

import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <main>
        <Header />
        <Box height={16} />
      <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
      </>
      <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
