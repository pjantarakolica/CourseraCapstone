import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import dishicon from "../Assets/DishIcon.svg"
import { Link as ChakraLink } from '@chakra-ui/react'

const Card = ({ title, price, description, image }) => {
  return (
    <VStack
      bg="#ffffff"
      borderRadius="5%"
      alignItems="normal"
      paddingBottom="5"
      color="black"
      maxWidth="30%"
    >
      <Image src={image} alt={title} borderRadius="5% 5% 0 0" paddingBottom="3" height="50%"/>
      <HStack padding="5" alignItems="center" justifyContent="space-between">
        <Heading as="h3" size="lg" textAlign="left">{title}</Heading>
        <Text fontSize="xl" color="#ee9972">${price}</Text>
      </HStack>
      <Text paddingLeft="5" paddingRight="5" color="#495e57">{description}</Text>
      <ChakraLink href="#">
      <HStack paddingLeft="5" paddingTop="3">
            <Text color="#495e57" fontWeight="bold">Order Online</Text>
            <Image src={dishicon}/>
      </HStack>
      </ChakraLink>
    </VStack>
  );
};

export default Card;