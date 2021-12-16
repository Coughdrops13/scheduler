import {useState} from 'react';

// custom hook used to change state so that navigation between components on page is possible

export default function useVisualMode(initial) {
  // each mode refers to a specific Component (sometimes two)
  const [mode, setMode] = useState(initial);
  // history allows us to go back to other modes when we click cancel or edit on the Form
  const [history, setHistory] = useState([initial]); 

  function transition(newMode, replace = false) {
    const newHistory = [...history];
    // if replace is true, the history array removes its last mode and pushes a new one to the end of the array
    if (replace) {
      newHistory.pop();
      newHistory.push(newMode);
      setHistory([...newHistory]);
      setMode(newHistory[newHistory.length - 1]);
      return { transition };
    }
    // if replace is false, then new mode is added to the history array
    setHistory([...newHistory, newMode])
    setMode(newMode);
    return { transition };
  }
// function that allows us to press cancel and switch to the proper mode according to history
  function back () {
    if (history.length < 2) {
      return;
    }
    const newHistory = [...history]
    newHistory.pop()
    setHistory([...newHistory])
    setMode(newHistory[newHistory.length - 1]);

    return { back }
  }

  return { mode, transition, back, history };
}