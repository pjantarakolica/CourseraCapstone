import React, { useEffect, useRef } from "react";
import logo from "./Assets/Logo.svg";
import Nav from "./Components/Nav";
import { Box, HStack } from "@chakra-ui/react";



function Header() {
    const menuBox = useRef(null);

    useEffect(() => {
        let prevScroll = window.scrollY;
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > prevScroll) {
                menuBox.current.style.transform = "translateY(-200px)";
            } else {
                menuBox.current.style.transform = "translateY(0)";
            }
            prevScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        };

    }, []);

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
            height={16}
            ref={menuBox}>
            <Box maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing="16px">
                    <img src={logo} alt="logo" />
                    <Nav align="Horizontal" spacing={6} />
                </HStack>
            </Box>
        </Box>
    )
}

export default Header;