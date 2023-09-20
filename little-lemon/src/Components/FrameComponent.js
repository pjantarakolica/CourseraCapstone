import { Box, HStack } from "@chakra-ui/react";

function FrameComponent({bgColor,children,...Props}) {
    return (
        <Box
            left={0}
            right={0}
            backgroundColor={bgColor}
            {...Props}>
            <Box maxWidth="1280px" margin="0 auto" px={32}>
                <HStack
                    py={2}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={16}>
                    {children}
                </HStack>
            </Box>
        </Box>
    )
}

export default FrameComponent;