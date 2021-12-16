import React from "react";
import "./InterviewerListItem.scss";
import classNames from 'classnames';

// Component that shows an interviewer's avatar and name (when selected)

export default function InterviewerListItem(props) {
  const { name, avatar, setInterviewer, selected } = props;
  let interviewersClassName = classNames('interviewers__item', {
    'interviewers__item--selected': selected
  });

  return (
    <li className={interviewersClassName} onClick={setInterviewer}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt="Sylvia Palmer"
      />
      {selected && name}
    </li>
  );
}