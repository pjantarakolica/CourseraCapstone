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



function Nav(props){
    return(
        <nav>
            <FormatNav {...props}>
                <ChakraLink as={ReactRouterLink} to="/">Homepage</ChakraLink>
                <ChakraLink as={ReactRouterLink} to="/booking">Reservations</ChakraLink>
            </FormatNav>
        </nav>
    )
}

export default Nav;