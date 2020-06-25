import Slider from 'rc-slider';
import React, { useState } from 'react';
import 'rc-slider/assets/index.css';

// The number to initially be previewed in the slider
const initialFollowers = 10000;

// The number of dollars paid per follow
const dollarsPerFollower = 0.005;

const SocialSlider: React.FC = () => {
  const [followers, setFollowers] = useState(initialFollowers);

  return (
    <div className="z-10 w-full md:px-10 py-6">
      <div className="bg-white p-5 shadow-soft-xl rounded-lg items-center justify-center flex">
        <div className="md:w-1/2">
          <h4 className="text-2xl font-semibold">
            Not Enough Followers for You?
          </h4>
          <p className="socials--slider--desired opacity-70 inline-block">
            Slide to your desired amount
          </p>
          <div className="mt-8">
            <h4 className="text-2xl font-medium">
              +{followers.toLocaleString()} Followers
            </h4>
            <p className="opacity-70 text-sm mb-2">
              {(followers * dollarsPerFollower).toLocaleString()} USD
            </p>
            <Slider
              defaultValue={initialFollowers}
              min={1000}
              max={25000}
              step={1000}
              railStyle={{ backgroundColor: '#c2cae1' }}
              trackStyle={{ backgroundColor: '#38c3fa' }}
              onChange={(number: number) => {
                setFollowers(number);
              }}
            />
          </div>
          <button type="button" className="btn w-full mt-8 sm:w-1/2">
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialSlider;
