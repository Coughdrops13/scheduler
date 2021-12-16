import React from 'react';
import DayListItem from './DayListItem';

// The list of days on the left or top of the screen
// called by Application.js

export default function DayList(props) {
  return (
    <ul>
      {props.days.map(day => (
        <DayListItem
          key = {day.id}
          name = {day.name}
          spots = {day.spots}
          selected = {day.name === props.value}
          setDay = {props.onChange}
        />
      ))};
    </ul>
  );
}