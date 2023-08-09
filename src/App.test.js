import {render,screen,fireEvent} from '@testing-library/react';
import BookingForm from './components/BookingForm';
import {BrowserRouter as Router} from 'react-router-dom';

//test for BookNow 
test('renders react component', async () => {
   render(
 <Router>
      <BookingForm/>
   </Router>
   );
   const bookElement = screen.getByText("Book Now");
       expect(bookElement).toBeInTheDocument();
 });

 //test for occasion
test('renders react occasion', async () => {
   render(
 <Router>
      <BookingForm/>
   </Router>
   );
const occasionElement = screen.getByText("Birthday")
expect(occasionElement).toBeInTheDocument()
   });
   test("Updates the time correctly", () => {
      render( <Router><BookingForm /></Router>);
      const occasionSelector = screen.getByLabelText(/Occasion/);
      fireEvent.change(occasionSelector, { target: { value: "Birthday" } });
      expect(occasionSelector.value).toEqual("Birthday");
});

//test for time
test('check disable Time select', async () => {
   render(<Router><BookingForm /></Router>);
   const timeElement = screen.getByLabelText(/Select Time/);
   fireEvent.change(timeElement, { target: { value: "17:00" } });
 });

