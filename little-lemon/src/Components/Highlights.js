import FrameComponent from "./FrameComponent"
import Card from "./Card"
import { Heading, Button, VStack, HStack, Stack } from "@chakra-ui/react";

const menuspecial = [
    {
        title: "Greek Salad",
        price: 12.99,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese with cruchy garlic and rosemary croutons",
        getImageSrc: () => require("../Assets/GreekSalad.jpg")
    },
    {
        title: "Bruchetta",
        price: 5.99,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garglic and seasoned with salt and olive oil.",
        getImageSrc: () => require("../Assets/Bruchetta.png")
    },
    {
        title: "Lemon Cake",
        price: 4.99,
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../Assets/LemonCake.jpg")
    }
];

function Highlights() {
    return (
            <FrameComponent bgColor="#edefee" py={8} id="highlights-section">
                <VStack>
                    <HStack justifyContent="space-between" width="100%" py={4}>
                        <Heading as="h2" size="xl">Weekly Specials!</Heading>
                        <Button bg="#f4ce14">Online Menu</Button>
                    </HStack>

                    <Stack direction={['column','row']} justifyContent="space-between">
                    {menuspecial.map((menu) => (
                        <Card
                            title={menu.title}
                            image={menu.getImageSrc()}
                            price={menu.price}
                            description={menu.description}
                        />
                    ))}
                    </Stack>

                </VStack>
            </FrameComponent>
    )
}

export default Highlights;