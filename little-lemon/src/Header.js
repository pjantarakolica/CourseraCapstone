import logo from "./Assets/Logo.svg";
import Nav from "./Nav";
import { Box, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#edefee"
            height={16}>
            <Box maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing="16px">
                    <img src={logo} alt="logo" />
                    <Nav align="Horizontal"/>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header;