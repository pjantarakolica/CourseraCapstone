import { render, screen, fireEvent } from '@testing-library/react';
import Testimonials from './Components/Testimonials';
import BookingPage from './BookingPage';
import { BrowserRouter } from 'react-router-dom';
import App from "./App"
import { Button } from '@chakra-ui/react';

test('Renders the Testimonial Heading', () => {
  render(<Testimonials />);
  const headingElement = screen.getByText("Testimonials");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(
    <BrowserRouter>
    <BookingPage availableTimes={["17:00"]}/>
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Online Booking");
  expect(headingElement).toBeInTheDocument();
})

// test('Test initializeTimes function', () => {
//   render(
//     <BrowserRouter>
//     <App />
//     <label for="button1">THIS</label>
//     <Button id="button1" onClick={dispatch({type:'initializeTimes'})} />
//     </BrowserRouter>
//   );
//   const clickButton = screen.getByLabelText('THIS');
//   fireEvent.click(clickButton);
//   expect(availableTimes).toBe([]);
// });
