import { VStack, Box, FormControl, FormLabel, Input, FormErrorMessage, Select, Button } from "@chakra-ui/react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from 'yup';

import { useNavigate } from "react-router-dom";


function BookingForm(props) {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            resDate: '',
            resTime: '',
            occasion: '',
            guests: 1,
        },
        onSubmit: (values) => {
            props.submission(values);
            navigate('/confirmed-booking');
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            resDate: Yup.date().min(new Date(), 'The booking must be done at least one day in advance.').required("Required"),
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
                <VStack spacing={2} color="black">
                    <FormControl isInvalid={formik.errors.fullName && formik.touched.fullName}>
                        <FormLabel htmlFor="fullName">Name</FormLabel>
                        <Input id="fullName" placeholder="Input your name" {...formik.getFieldProps("fullName")} />
                        <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" placeholder="Input your email" {...formik.getFieldProps("email")} />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.resDate && formik.touched.resDate}>
                        <FormLabel htmlFor="resDate">Choose Date</FormLabel>
                        <Input id="resDate" type="date" {...formik.getFieldProps("resDate")} onChange={(e) => {
                            formik.handleChange(e);
                            formik.errors.resDate ? props.dispatch({ type: 'updateTimes', date: formik.values.resDate }) : props.dispatch({ type: 'initializeTimes' })
                        }} />
                        <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                        isDisabled={formik.touched.resDate ? formik.errors.resDate : true}
                        isInvalid={formik.errors.resTime && formik.touched.resTime}>
                        <FormLabel htmlFor="resTime">Choose Time</FormLabel>
                        <Select id="resTime" placeholder="Select time" {...formik.getFieldProps("resTime")}>
                            {props.availableTimes.map((aTime) => (
                                <option value={aTime}>{aTime}</option>
                            ))}
                        </Select>
                        <FormErrorMessage>{formik.errors.resTime}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                        <FormLabel htmlFor="guests">Number of guests</FormLabel>
                        <NumberInput min={1} max={10} >
                            <NumberInputField id="guests" placeholder={1} {...formik.getFieldProps("guests")} />
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
                    <hr/>
                    <Button type="submit" bgColor="#f4ce14" width="full">Make Your reservation</Button>
                </VStack>
            </form>
        </Box>
    )
}

export default BookingForm;