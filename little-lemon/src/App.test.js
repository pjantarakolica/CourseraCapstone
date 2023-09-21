import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the BookingForm heading', () => {
  render(<App />);
  const headingElement = screen.getByText("Online Booking");
  expect(headingElement).toBeInTheDocument();
});


test('Test initializeTimes function',() => {
  render(<App />);
  dispatch({type:'initializeTimes'});
  expect(availableTimes).toBe([]);
});