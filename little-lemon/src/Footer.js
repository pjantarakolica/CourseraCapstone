import logo from "./Assets/FooterLogo.png";
import Nav from "./Components/Nav";

import { Box, HStack, Stack, Heading, Image, Text,Center} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon , LinkIcon} from '@chakra-ui/icons'
import { Link as ChakraLink} from '@chakra-ui/react'

function Footer(){
    return(
        <Box
            left={0}
            right={0}
            backgroundColor="#333333">
                <Box maxWidth="1280px" margin="0 auto" px={16}>
                <HStack
                    py={2}
                    justifyContent="space-between"
                    alignItems="top"
                    spacing={16}>
                        <Image src={logo} alt="logo" maxWidth="15%" p={2} />
                        <Stack py={16}>
                            <Nav align="Vertical" spacing={0} color="#edefee" alignItems="normal"/>
                        </Stack>
                        <Stack py={16} color="#fbdabb">
                            <Heading as='h2' size='lg' color="#f4ce14">Contact Us</Heading>
                            <ChakraLink href="#"><PhoneIcon/> 888-888-8888</ChakraLink>
                            <ChakraLink href="#"><EmailIcon/> contact@littlelemon.com</ChakraLink>
                        </Stack>
                        <Stack py={16} color="#fbdabb">
                            <Heading as='h2' size='lg' color="#f4ce14">Social Media</Heading>
                            <ChakraLink href="#"><LinkIcon/> Facebook</ChakraLink>
                            <ChakraLink href="#"><LinkIcon/> Twitter</ChakraLink>
                        </Stack>
                </HStack>
                </Box>
                <Center>
                    <Text fontSize="sm" color="#edefee">© Copyright {new Date().getFullYear()} All Rights Reserved</Text>
                </Center>
        </Box>
    )
}

export default Footer;