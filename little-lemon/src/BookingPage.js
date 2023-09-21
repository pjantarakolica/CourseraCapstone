import FrameComponent from "./Components/FrameComponent";
import BookingForm from "./Components/BookingForm";
import bookingshot from "./Assets/Booking.jpg";


import { VStack, Heading, Image} from "@chakra-ui/react";

function BookingPage(props) {

    return (
        <FrameComponent bgColor="#495E57" id="hero-section">
            <VStack p={4}>
                <Heading as="h2" color="#f4ce14">Online Booking</Heading>
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
            </VStack>
            <Image src={bookingshot} width="60%" borderRadius={16}/>
        </FrameComponent>
    )
}

export default BookingPage;