import React from 'react';

export interface GiveawayProps {
  src: string;
}

const Giveaway: React.FC<GiveawayProps> = (props: GiveawayProps) => {
  const { src } = props;

  return (
    <div
      style={{
        height: 1000,
        background: `url('${src}') no-repeat top 0 left 0`,
        backgroundSize: '1800px',
      }}
    />
  );
};

export default Giveaway;
