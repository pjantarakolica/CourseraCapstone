import { Box, Wrap, WrapItem, Avatar, Text } from "@chakra-ui/react";
import { StarIcon} from '@chakra-ui/icons'

const RatingCard= (props) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p={2} bg="#edefee" minWidth="25%" borderColor="#333333">
            <Box display='flex' mt='2' alignItems='center' justifyContent="center" p={2}>
                {Array(5).fill('').map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < props.rating ? '#f4ce14' : 'gray.300'}
                    />))}
            </Box>
            <Box display='flex' alignItems='center' paddingTop={2} paddingLeft={2}>
                <Wrap alignItems="center">
                    <WrapItem>
                        <Avatar name={props.profile} src={props.image} bg="#333333"/>
                    </WrapItem>
                    <WrapItem>
                        <Text fontSize="lg" fontWeight="bold">{props.profile}</Text>
                    </WrapItem>
                </Wrap>
            </Box>
            <Box paddingTop={2} paddingLeft={2}>
                <Text fontSize="md">{props.review}</Text>
            </Box>
        </Box>
    )
}

export default RatingCard;