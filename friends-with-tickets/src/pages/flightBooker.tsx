import './styles.css';
import { useState } from 'react';

// skeleton first draft, coming back to clean up add form handling, replace alerts.

export default function App() {
  // Upon successful submission, a message is displayed informing the user of the selection:
  // One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
  // Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"


  // we need to check the validiation of the dates.
  // neither of the dates in the past
  // the return date is after the current date.

  // add error handling for fun with state

  // Handles prevalidation for no past dates or date before outgoiing date
  // clear function for when you toggle back and forth.
  const currentDate = new Date().toLocaleDateString('en-CA')
  const [ formData, setFormData] = useState({flightType: "one-way", outGoingDate: currentDate, inComingFlight: ""})
  const returnFlightMin = formData.outGoingDate ? formData.outGoingDate : currentDate;


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    let submitMessage = 'Check your selected dates are valid.'

    if(new Date(formData.outGoingDate) <= new Date(formData.inComingFlight)){
      submitMessage = `You have booked a return flight, departing on ${formData.outGoingDate} and returning on ${formData.inComingFlight}`
    } else if(new Date(formData.outGoingDate) >= new Date(currentDate)) {
      submitMessage = `You have booked a one-way flight on ${formData.outGoingDate}`
    }

    alert(submitMessage)
  }

  const onChangeFlightData = (event: React.ChangeEvent<HTMLSelectElement> | any): void => {
    const {name, value}= event.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="stackedLayout">
        <label htmlFor="flightType" className="sr-only">One way or Return?</label>
        <select id="flightType" name="flightType" className="typeFlight" onChange={onChangeFlightData} value={formData.flightType}>
          <option value="one-way">One-way flight</option>
          <option value="return-flight">Return flight</option>
        </select>
        <label>
          <span className="sr-only">Select One Way Date</span>
          <input className="datePicker" id="outGoingDate" name="outGoingDate" type="date" min={currentDate} onChange={onChangeFlightData} value={formData.outGoingDate} />
        </label>
        {formData.flightType ===  "return-flight" && (
          <label>
            <span className="sr-only">Select Return Flight Date</span>
            <input className="datePicker" id="inComingFlight" name="inComingFlight" type="date" min={returnFlightMin} onChange={onChangeFlightData} value={formData.inComingFlight} />
          </label>
        )}
        <button type="submit">Book</button>
      </div>
    </form>
  );
}

// Controlled Component - The form sending/validtion is handled by react often in state like above
// Uncontrolled Component - the form state would be handled by the DOM aka not us (often using the useRef hook)
// https://www.freecodecamp.org/news/how-to-build-forms-in-react/#:~:text=To%20handle%20form%20submission%2C%20you%20can%20use%20the%20handleSubmit%20function.&text=In%20this%20example%2C%20we%20pass,values%20of%20each%20form%20field.