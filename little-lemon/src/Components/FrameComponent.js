import { Box, Stack } from "@chakra-ui/react";

function FrameComponent({bgColor,children,...Props}) {
    return (
        <Box
            left={0}
            right={0}
            backgroundColor={bgColor}
            {...Props}>
            <Box maxWidth="1280px" margin="0 auto" px={{base:4,md:32}}>
                <Stack
                    direction={{base:"column",md:"row"}}
                    py={2}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={16}>
                    {children}
                </Stack>
            </Box>
        </Box>
    )
}

export default FrameComponent;