import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

// book or edit interview component

export default function Form(props) {

  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");
  const reset = () => {
    setStudent('');
    setInterviewer('');
  }

  // empties form inputs
  const cancel = () => {
    reset();
    props.onCancel();
  }
// confirms that form inputs are valid (exist) before saving an interview
// shows an error message if triggered
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("Choose an Interviewer");
      return;
    }
    setError("");
  
    props.onSave(student, interviewer);
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            // controlled variable set when input is typed in
            value={student}
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
          {/* error message that appears if inputs do not exist */}
          <section className="appointment__validation">{error}</section>
        </form >
        {/* list of possible interviewers that appear at the bottom of the form */}
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={(id) => setInterviewer(id)}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
}