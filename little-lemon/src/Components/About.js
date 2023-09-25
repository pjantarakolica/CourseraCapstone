import { Stack, Heading, Image, Text } from "@chakra-ui/react";
import aboutshot from "../Assets/AboutPhoto.jpg";

import FrameComponent from "./FrameComponent"


function About() {
    return (
        <FrameComponent bgColor="#edefee" p={{base:2,md:4}} id="about-section">
            <Image
                src={aboutshot}
                alt="Mario and Adrian"
                objectFit='cover'
                maxWidth={{base:"90%",md:"60%"}}
                borderRadius={16} />
            <Stack py={{base:2,md:16}}>
                <Heading as='h2' size='xl' color="#f4ce14">About Little Lemon</Heading>
                <Heading as='h3' size='lg' color="#333333">Located in Chicago</Heading>
                <Text size='2xl' color="#495e57">
                    Little Lemon is a family owned Mediterranean restaurant started by Mario and Adrian. The dishes are focused on traditional recipes served with a modern twist.
                </Text>
            </Stack>
        </FrameComponent>
    )
}

export default About;