import { render, screen } from '@testing-library/react';
import Testimonials from './Components/Testimonials';
import BookingPage from './BookingPage';
import { Routes, BrowserRouter } from 'react-router-dom';

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
//   render(<App />);
//   dispatch({type:'initializeTimes'});
//   expect(availableTimes).toBe([]);
// });
