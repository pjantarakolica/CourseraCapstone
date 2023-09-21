import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'
import { HStack,VStack } from "@chakra-ui/react";

function FormatNav({align,children,...Props}){
    if(align === "Horizontal"){
        return(
            <HStack {...Props}>{children}</HStack>
        )
    }else{
        return(
            <VStack {...Props}>{children}</VStack>
        )
    }
}

const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

function Nav(props){
    return(
        <nav>
            <FormatNav {...props}>
                <ChakraLink as={ReactRouterLink} to="/">Homepage</ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/" onClick={handleClick('about')}>About</ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/" onClick={handleClick('highlights')}>Menu</ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/booking">Reservations</ChakraLink>
                <ChakraLink href="#">Order Online</ChakraLink>
                <ChakraLink href="#">Login</ChakraLink>
            </FormatNav>
        </nav>
    )
}

export default Nav;