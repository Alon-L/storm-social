import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GiveawayTimer from './GiveawayTimer';

export interface GiveawayContentProps {
  src: string;
  desc: string;
  initialRemaining: number;
}

const GiveawayContent: React.FC<GiveawayContentProps> = (
  props: GiveawayContentProps,
) => {
  const { src, desc, initialRemaining } = props;

  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    setSoldOut(initialRemaining <= 0);
    console.log('Here');
  }, [initialRemaining]);

  return (
    <div className="giveaway--content flex flex-col items-center justify-center">
      <img
        className="giveaway--content--image"
        width={100}
        src={src}
        alt="Giveaway"
      />
      <p className="giveaway--content--desc text-xl whitespace-pre-line font-semibold">
        {desc}
      </p>
      <div className="mt-5">
        <GiveawayTimer
          setSoldOut={setSoldOut}
          initialRemaining={initialRemaining}
        />
        <p className="text-lg">Remaining!</p>
        <div className="mt-3">
          {soldOut ? (
            <p className="text-3xl font-semibold mb-8">Sold Out!</p>
          ) : (
            <div className="p-2">
              <Link
                className="btn bg-primary-700 border-primary-700 hover:bg-primary-900 hover:border-primary-900 shadow-lg"
                to="/products/growth-slot"
              >
                Enter Now!
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiveawayContent;
