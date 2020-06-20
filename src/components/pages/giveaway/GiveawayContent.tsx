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
    <div className="flex flex-col items-center justify-center">
      <img width={100} src={src} alt="Giveaway" />
      <p className="giveaway--content text-xl whitespace-pre-line font-semibold">
        {desc}
      </p>
      <p className="text-lg mb-4">Remaining!</p>
      <GiveawayTimer initialRemaining={initialRemaining} />
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
