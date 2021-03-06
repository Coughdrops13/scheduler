import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "../../hooks/useVisualMode";

// component that keeps track of appointment mode and transitions to proper components


export default function Appointment(props) {

  // list of mode variables that then have components associated with them
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  // function that executes bookInterview function after transitioning to proper modes
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props
      .bookInterview(props.id, interview)
      .then((res) => transition(SHOW))
      .catch(err => transition(ERROR_SAVE, true))
  }

  // same as save but transitions to Empty component instead of Show component
  function deleteAppointment() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then((res) => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true))
  }

  return(
    <article className="appointment">
      {/* every appointment shows time no matter the mode */}
        <Header time={props.time}/>
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => transition(CONFIRM)}
            onEdit={() => transition(EDIT)}
          />
        )}

        {/* each mode is associated with a component and each component is passed all the props it needs */}
        {mode === CREATE && <Form interviewers={props.interviewers} onSave={save} onCancel={() => back()}/>}
        {mode === SAVING && <Status message={"Saving..."}/>}
        {mode === CONFIRM && <Confirm onCancel={() => back()} onConfirm={deleteAppointment} message={"Are you sure?"}/>}
        {mode === DELETING && <Status message={"Deleting..."}/>}
        {mode === EDIT && <Form name={props.interview.student} interviewers={props.interviewers} interviewer={props.interview.interviewer.id} onSave={save} onCancel={() => back()}/>}
        {(mode === ERROR_SAVE || mode === ERROR_DELETE) && <Error message={"Action could not be completed"}onClose={() => back()}/>}
    </article>
  );
}