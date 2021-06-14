import React from 'react';
import { secontsToMinutes } from '../utils/seconds-to-minutes';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secontsToMinutes(props.mainTime)}</div>;
}
