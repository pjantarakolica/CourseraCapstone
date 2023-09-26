import RatingCard from "./RatingCard";
import FrameComponent from "./FrameComponent"

import { SimpleGrid, Heading, VStack } from "@chakra-ui/react";

const testimonialList = [
    {
        rating: 3,
        profile: "John Doe",
        getImageSrc: () => require("../Assets/Avatar.jpg"),
        review: "Very Delicious!"
    },
    {
        rating: 4,
        profile: "Jane Doe",
        getImageSrc: () => '',
        review: "I love the food. Will definitely come again!"
    },
    {
        rating: 5,
        profile: "Ed Jonas",
        getImageSrc: () => '',
        review: "What a Delight!"
    },
    {
        rating: 4,
        profile: "Carl Sr.",
        getImageSrc: () => '',
        review: "Very Homey!"
    },
    {
        rating: 4,
        profile: "James Charl",
        getImageSrc: () => '',
        review: "Classic!"
    },
    {
        rating: 3,
        profile: "Jay Z",
        getImageSrc: () => '',
        review: "Very Delicious!"
    }
];

function Testimonials() {
    return (
        <FrameComponent bgColor="#495e57" id="testimonials-section">
            <VStack width="100%">
                <Heading as="h2" size="xl" color="#edefee" p={4}>Testimonials</Heading>
                <SimpleGrid columns={{base:2,md:4}} spacing={4} width="100%" paddingBottom={8}>
                    {testimonialList.map((tlist) => (
                        <RatingCard
                            key={tlist.profile}
                            rating={tlist.rating}
                            image={tlist.getImageSrc()}
                            profile={tlist.profile}
                            review={tlist.review}
                        />
                    ))}
                </SimpleGrid>
            </VStack>
        </FrameComponent>
    )
}

export default Testimonials;