import './App.css';
import theme from './Components/theme'
import Header from "./Header"
import Homepage from "./Homepage";
import Booking from "./BookingPage";
import ConfirmedBooking from './ConfirmedBooking';
import Footer from "./Footer";

import { ChakraProvider } from '@chakra-ui/react';
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { useReducer } from "react";

import useSubmit from './Hooks/useSubmit';

function App() {

  const slotAdjust = (slot, action) => {
    if (action.type="updateTimes") return ["17:00","18:00","19:00","20:00","21:00","22:00"];
    if (action.type="initializeTimes") return [];
  }

  const [availableTimes,dispatch] = useReducer(slotAdjust,[])
  const {formResponse,submit} = useSubmit();

  return (
    <ChakraProvider theme={theme}>
      <main>
        <Header />
        <Box height={16} bgColor="#495E57"/>
      <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} submission={submit}/>}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking output={formResponse}/>}></Route>
      </Routes>
      </>
      <Footer />
      </main>
    </ChakraProvider>
  );
}

export default App;
