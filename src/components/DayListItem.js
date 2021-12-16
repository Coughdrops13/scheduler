import React from "react";
import 'components/DayListItem.scss';
import classNames from 'classnames';

// Each day that appears in the list of days on the left or top of the screen
// called by DayList

export default function DayListItem(props) {

  let dayClass = classNames('day-list__item', {
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0,
  });

  // function that creates proper message to appear depending on number of spots available
  const formatSpots = spots => {
    if (spots === 1) {
      return '1 spot remaining';
    } else if (spots === 0) {
      return 'no spots remaining';
    } else {
      return`${spots} spots remaining`;
    }
  };

  return (
    <li onClick={() => props.setDay(props.name)} className={dayClass} selected={props.selected}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}