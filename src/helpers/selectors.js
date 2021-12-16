export function getAppointmentsForDay(state, name) {
  // get day specified in param
  const filteredDays = state.days.filter(day => day.name === name);
  // if day exists in api schedule data create a filteredAppointments Array
  if (filteredDays.length > 0) {
    const filteredAppointments = [];
    // loop through id's of appointments object in day object
    for (const id of filteredDays[0].appointments) {
      // state.appointments[id] is the appointment object
      filteredAppointments.push(state.appointments[id]);
    }
    return filteredAppointments;
  }
  return [];
}


export function getInterview(state, interview) {
  if (interview) {
    const newInterview = {...interview};
    newInterview.interviewer = state.interviewers[interview.interviewer];
    return newInterview;
  }
  return null;
}

export function getInterviewersForDay(state, name) {
  // get day specified in param
  const filteredDays = state.days.filter(day => day.name === name);
  // if day exists in api schedule data create a filteredInterviewers Array;
  if (filteredDays.length > 0) {
    const filteredInterviewers = [];
    // loop through id's of appointments object in day object
    for (const id of filteredDays[0].interviewers) {
      // make sure interview exists, if so, push interviewer object from 
      // state.interviewers to filteredInterviewers Array
        // state.appointments[id].interview.interviewer is a single id and when put in 
        // state.interviewers[], returns the object for that interview
      filteredInterviewers.push(state.interviewers[id]);
    }
    return filteredInterviewers;
  }
  return [];
}
