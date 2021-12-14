import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState({ ...state, day });
  
   // Get all info from API about state
  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8001/api/days'),
      axios.get('http://localhost:8001/api/appointments'),
      axios.get('http://localhost:8001/api/interviewers')
  
    ])
      .then((all) => {
        const [firstDays, secondAppointments, thirdInterviewers] = all;
        setState(prev => ({...prev, days: firstDays.data, appointments: secondAppointments.data, interviewers: thirdInterviewers.data}));
      })
  }, []);
  
  
  // function called when save is clicked in Form component
  function bookInterview(id, interview) {
    // creates an appointment object with the given interview object from Form input
    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    };
    // creates appointments object with new appointment object
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    // api call to db to input new interview object, returns a 
    // promise that we .then in save function in Appointment component
    return (
      axios.put(`http://localhost:8001/api/appointments/${id}`, {interview})
        .then(res => {
          setState((prevState) => {
            return {...prevState, appointments}
          })
      })
    )
  }
  
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    }
    const appointments = {
      ...state.appointments,
      [id]: appointment
    }
    return (
      axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(res => {
        setState((prevState) => {
          return {...prevState, appointments}
        })
      })
    )
  }
  return {state, setDay, bookInterview, cancelInterview };
}
