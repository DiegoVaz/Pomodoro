import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={2700}
        shortRestTime={900}
        longRestTime={1800}
        cycles={4}
      />
    </div>
  );
}

export default App;
