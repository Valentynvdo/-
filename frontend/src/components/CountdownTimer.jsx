import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { AnimatedEmoji } from './AnimatedEmoji';

export const CountdownTimer = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      } else {
        onComplete && onComplete();
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2 text-[#00FFD1]">
        <Calendar className="w-5 h-5" />
        <Clock className="w-5 h-5" />
        <AnimatedEmoji emoji="⏳" animation="pulse" />
      </div>
      
      <div className="grid grid-cols-5 gap-4 text-center">
        {[
          { label: 'Місяців', value: timeLeft.months },
          { label: 'Днів', value: timeLeft.days },
          { label: 'Годин', value: timeLeft.hours },
          { label: 'Хвилин', value: timeLeft.minutes },
          { label: 'Секунд', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="bg-black/40 backdrop-blur-md border border-white/20 p-4 rounded-none">
            <div className="text-2xl font-bold text-[#00FFD1]">{item.value}</div>
            <div className="text-xs text-white/70">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};