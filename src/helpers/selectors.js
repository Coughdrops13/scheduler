// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3],
//       interviewers: [1, 2, 3, 4]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5],
//       interviewers: [1, 2, 3, 4]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   },
//   interviewers: {
//     "1": {  
//       "id": 1,
//       "name": "Sylvia Palmer",
//       "avatar": "https://i.imgur.com/LpaY82x.png"
//     },
//     "2": {
//       id: 2,
//       name: "Tori Malcolm",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     },
//     "3": {
//       id: 3,
//       name: "Bat Man",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     },
//     "4": {
//       id: 4,
//       name: "Robin",
//       avatar: "https://i.imgur.com/Nmx0Qxo.png"
//     }
//   }
// };



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

// console.log('HERE:', getInterviewersForDay(state, 'Tuesday'));