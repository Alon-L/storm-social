import React from 'react';
import GiveawayContent from './GiveawayContent';
import influencer from '../../../assets/giveaway/influencer.png';
import phones from '../../../assets/giveaway/phones.png';
import splash from '../../../assets/giveaway/splash.png';

export interface Giveaways {
  current: GiveawayProps;
  previous: GiveawayProps;
}

export interface GiveawayProps {
  src: string;
  desc: string;
  remaining: number;
}

const Giveaway: React.FC<GiveawayProps> = (props: GiveawayProps) => {
  const { src, desc, remaining } = props;

  return (
    <div style={{ backgroundColor: '#efeee9' }}>
      <div className="container md:flex flex-no-wrap justify-center py-32">
        <div className="giveaway--splash relative flex items-center justify-center">
          <img
            className="absolute z-0 giveaway--splash--image"
            width={800}
            src={splash}
            alt="Splash"
          />
          <div className="flex text-center justify-center items-center relative md:py-0 py-16 z-10">
            <GiveawayContent
              src={src}
              desc={desc}
              initialRemaining={remaining}
            />
          </div>
        </div>
        <div className="-ml-24 -my-12 z-10 md:block hidden">
          <img width={350} src={phones} alt="Phones" />
        </div>
        <div className="-ml-16 z-0 lg:block hidden">
          <img width={550} src={influencer} alt="Influencer" />
        </div>
      </div>
    </div>
  );
};

export default Giveaway;
