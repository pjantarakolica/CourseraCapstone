import { Stack, Heading, Image, Text, Button } from "@chakra-ui/react";
import heroshot from "../Assets/HeroShot.jpg";

import FrameComponent from "./FrameComponent"

import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink } from '@chakra-ui/react'

function Hero() {
    return (
        <FrameComponent bgColor="#495E57" id="hero-section">
            <Stack py={16}>
                <Heading as='h1' size='2xl' color="#f4ce14">Little Lemon</Heading>
                <Heading as='h2' size='xl' color="#edefee">Chicago</Heading>
                <Text size='2xl' color="#edefee">
                    Little Lemon is a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </Text>
                <ChakraLink as={ReactRouterLink} to="/booking"><Button bg="#f4ce14">Reserve a Table</Button></ChakraLink>
            </Stack>
            <Image
                src={heroshot}
                alt="Chef Curating Dish"
                objectFit='cover'
                maxWidth="60%"
                borderRadius={16} />
        </FrameComponent>
    )
}

export default Hero;