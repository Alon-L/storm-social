import React from 'react';
import left from '../../../assets/growth/results/left.png';
import middle from '../../../assets/growth/results/middle.png';
import right from '../../../assets/growth/results/right.png';

export interface GrowthResult {
  name: string;
  src: string;
}

const results: GrowthResult[] = [
  {
    name: 'captweresinking',
    src: left,
  },
  {
    name: 'audiusmusic',
    src: middle,
  },
  {
    name: 'gmoneyeveryday',
    src: right,
  },
];

const GrowthResults: React.FC = () => {
  return (
    <div className="container text-center">
      <div className="mb-16 lg:w-2/5 mx-auto">
        <h1 className="text-3xl font-semibold mb-3">Growth Results</h1>
        <p>
          Take a look at some of our amazing organic growth results for previous
          clients.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {results.map(({ name, src }) => (
          <div className="w-full mb-16 px-2 sm:px-4 md:w-1/2 lg:w-1/3">
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
