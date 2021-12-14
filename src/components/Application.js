import React, {useState, useEffect} from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useVisualMode from "../hooks/useVisualMode";



export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const { mode, transition, back } = useVisualMode;
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

    console.log('STATE.INTERVIEWERS:', state.interviewers);

  const setDay = day => setState({ ...state, day });
  const appointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  function bookInterview(id, interview) {
    console.log('AHHHHHHHH:', id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: {...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    setState({...state, appointments})

    return (
      axios.put(`http://localhost:8001/api/appointments/${id}`, appointment )
          .then(res => {
            setState({...appointments})
          })
    )
  }
// Why do we have this function in this component and not the Form component?
// Why do we transition in this function and in the save function?



  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);
    return (
      <Appointment
        key = {appointment.id}
        {...appointment}
        interview = {interview}
        interviewers = {interviewers}
        bookInterview = {bookInterview}
      />
    );
  });

  
    
  return (
    <main className="layout">
      <section className="sidebar">
      <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <>
          {schedule}
          <Appointment key="last" time="5pm" />
        </>
      </section>
    </main>
  );
}
