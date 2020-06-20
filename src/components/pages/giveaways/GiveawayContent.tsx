import React, { useEffect, useState } from 'react';

export interface GiveawayContentProps {
  src: string;
  desc: string;
  initialRemaining: number;
}

const padTime = (time: number): string => {
  return time.toString().padStart(2, '0');
};

const msToTime = (s: number): string => {
  const ms = s % 1000;
  s = (s - ms) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;

  return `${padTime(hrs)}:${padTime(mins)}:${padTime(secs)}`;
};

const GiveawayContent: React.FC<GiveawayContentProps> = (
  props: GiveawayContentProps,
) => {
  const { src, desc, initialRemaining } = props;

  const [remaining, setRemaining] = useState(initialRemaining);

  useEffect(() => {
    setTimeout(() => {
      if (remaining <= 0) {
        return;
      }

      setRemaining(remaining - 1000);
    }, 1000);
  }, [remaining]);

  return (
    <div className="flex flex-col items-center justify-center">
      <img width={100} src={src} alt="Giveaway" />
      <p className="giveaway--content text-xl whitespace-pre-line font-semibold">
        {desc}
      </p>
      <p className="font-semibold text-2xl">{msToTime(remaining)}</p>
      <p className="text-lg mb-4">Remaining!</p>
      <button
        className="btn bg-primary-700 border-primary-700 hover:bg-primary-900 hover:border-primary-900 shadow-lg"
        type="button"
      >
        Enter Now!
      </button>
    </div>
  );
};

export default GiveawayContent;
