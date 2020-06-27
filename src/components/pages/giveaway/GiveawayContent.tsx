import React from 'react';
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
        <GiveawayTimer initialRemaining={initialRemaining} />
        <p className="text-lg">Remaining!</p>
        <button
          className="btn mt-2 bg-primary-700 border-primary-700 hover:bg-primary-900 hover:border-primary-900 shadow-lg"
          type="button"
        >
          Enter Now!
        </button>
      </div>
    </div>
  );
};

export default GiveawayContent;
