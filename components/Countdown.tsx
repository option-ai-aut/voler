import React, { useState, useEffect } from 'react';
import { LAUNCH_DATE } from '../constants';

interface CountdownProps {
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

const Countdown: React.FC<CountdownProps> = ({ labels }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(LAUNCH_DATE) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  // Map keys from state to keys in labels prop
  const getLabel = (unit: string) => {
     return labels[unit as keyof typeof labels] || unit;
  };

  return (
    <div className="flex gap-4 md:gap-8 text-center text-voler-accent mt-4 font-sans justify-center w-full">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center min-w-[3.5rem] md:min-w-[4.5rem]">
          <span className="text-xl md:text-3xl font-light text-white tracking-wider">{value.toString().padStart(2, '0')}</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">{getLabel(unit)}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;