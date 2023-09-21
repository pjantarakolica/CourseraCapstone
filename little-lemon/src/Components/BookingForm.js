import { VStack, Box, FormControl, FormLabel, Input, FormErrorMessage, Select, Button} from "@chakra-ui/react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from 'yup';


function BookingForm(props) {
    const formik = useFormik({
        initialValues: {
            resDate: '',
            resTime: '',
            occasion: '',
            guests: 1,
        },
        onSubmit: (values) => {

        },
        validationSchema: Yup.object({
            resDate: Yup.date().min(new Date(), 'The date must be in the future.').required("Required"),
            resTime: Yup.string().required("Required"),
            guests: Yup.number().min(1).max(10).required("Required"),
        }),
    });


    return (
        <Box p={6} rounded="md" w="100%">
            <form
                style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
                onSubmit={(e) => {
                    e.preventDefault();
                    formik.handleSubmit();
                }}>
                <VStack spacing={4} color="black">
                    <FormControl isInvalid={formik.errors.resDate}>
                        <FormLabel htmlFor="res-date">Choose Date</FormLabel>
                        <Input id="res-date" type="date" {...formik.getFieldProps("resDate")} onChange={(e) =>{
                            formik.handleChange(e);
                            formik.errors.resDate? props.dispatch({type:'updateTimes',date:formik.values.resDate}): props.dispatch({type:'initializeTimes'})
                        }}/>
                        <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                        isDisabled={formik.touched.resDate ? formik.errors.resDate : true}
                        isInvalid={formik.errors.resTime}>
                        <FormLabel htmlFor="res-time">Choose Time</FormLabel>
                        <Select id="res-time" placeholder="Select time" {...formik.getFieldProps("resTime")}>
                            {props.availableTimes.map((aTime) => (
                                <option value={aTime}>{aTime}</option>
                            ))}
                        </Select>
                        <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.guests}>
                        <FormLabel htmlFor="guests">Number of guests</FormLabel>
                        <NumberInput min={1} max={10} >
                            <NumberInputField id="guests" {...formik.getFieldProps("guests")} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select id="occasion" placeholder="Select Occasion" {...formik.getFieldProps("occasion")}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </Select>
                        <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <Button type="submit" bgColor="#f4ce14" width="full">Make Your reservation</Button>
                </VStack>
            </form>
        </Box>
    )
}

export default BookingForm;