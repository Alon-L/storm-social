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
  endsAt: Date;
}

const Giveaway: React.FC<GiveawayProps> = (props: GiveawayProps) => {
  const { src, desc, endsAt } = props;

  console.log(endsAt.getTime(), Date.now());

  const remaining = endsAt.getTime() - Date.now();

  return (
    <div className="giveaway overflow-hidden relative">
      <div className="relative flex flex-no-wrap justify-center overflow-hidden lg:container lg:py-32">
        <div className="giveaway--splash absolute z-10 lg:relative lg:z-auto">
          <img
            className="absolute z-0 giveaway--splash--image"
            width={800}
            src={splash}
            alt="Splash"
          />
          <div className="giveaway--splash--content flex text-center text-white mx-auto justify-center items-center relative z-10 block pt-4 sm:pt-16">
            <GiveawayContent
              src={src}
              desc={desc}
              initialRemaining={remaining}
            />
          </div>
        </div>
        <div className="-ml-24 -my-12 z-10 lg:block hidden">
          <img width={350} src={phones} alt="Phones" />
        </div>
        <div className="giveaway--influencer lg:-ml-16 z-0">
          <img
            className="giveaway--influencer--image lg:border-4 lg:border-black lg:rounded-lg"
            width={550}
            src={influencer}
            alt="Influencer"
          />
        </div>
      </div>
    </div>
  );
};

export default Giveaway;
