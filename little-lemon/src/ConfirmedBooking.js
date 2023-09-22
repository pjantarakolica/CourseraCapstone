import FrameComponent from "./Components/FrameComponent";
import confirmedshot from "./Assets/ConfirmedBooking.jpg";

import { Stack, Heading, Image, Text} from "@chakra-ui/react";

function ConfirmedBooking(props) {
    return (
        <FrameComponent bgColor="#495E57" id="hero-section">
            <Image src={confirmedshot} width="50%" borderRadius={16}/>
            <Stack p={4} alignContent="center" color="#edefee">
                <Heading as="h2" color="#f4ce14">Confirmed Booking</Heading>
                <Text fontSize="lg">Your booking reservation is confirmed: </Text>
                <Text fontSize="sm"> Name: {props.output.fullName} </Text>
                <Text fontSize="sm"> Email: {props.output.email} </Text>
                <Text fontSize="sm"> Date: {props.output.resDate} </Text>
                <Text fontSize="sm"> Time: {props.output.resTime} </Text>
                <Text fontSize="sm"> No. of Guests: {props.output.guests} </Text>
                <Text fontSize="sm"> Occasion (if any): {props.output.occasion} </Text>
            </Stack>
        </FrameComponent>
    )
}

export default ConfirmedBooking;