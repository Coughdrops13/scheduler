import {useState} from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 

  function transition(newMode, replace = false) {
    const newHistory = [...history];
    if (replace) {
      newHistory.pop();
      newHistory.push(newMode);
      setHistory([...newHistory]);
      setMode(newHistory[newHistory.length - 1]);
      return { transition };
    }
    setHistory([...newHistory, newMode])
    setMode(newMode);
    return { transition };
  }

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