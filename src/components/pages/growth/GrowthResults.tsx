import React from 'react';
import audiusmusic from '../../../assets/growth/results/audiusmusic.png';
import captweresinking from '../../../assets/growth/results/captweresinking.png';
import gmoneyeveryday from '../../../assets/growth/results/gmoneyeveryday.png';

export interface GrowthResult {
  name: string;
  src: string;
}

const results: GrowthResult[] = [
  {
    name: 'audiusmusic',
    src: audiusmusic,
  },
  {
    name: 'captweresinking',
    src: captweresinking,
  },
  {
    name: 'gmoneyeveryday',
    src: gmoneyeveryday,
  },
  {
    name: 'audiusmusic 2',
    src: audiusmusic,
  },
  {
    name: 'captweresinking 2',
    src: captweresinking,
  },
  {
    name: 'gmoneyeveryday 2',
    src: gmoneyeveryday,
  },
];

const GrowthResults: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="mb-16 lg:w-2/5 mx-auto">
        <h1 className="text-3xl font-semibold mb-3">Growth Results</h1>
        <p>
          Take a look at so me of our amazing organic growth results for
          previous clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {results.map(({ name, src }) => (
          <div className="w-1/3 mb-16">
            <img
              width={350}
              className="mx-auto"
              key={name}
              src={src}
              alt={name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthResults;
