import React from 'react';
import phone from '../../../../assets/home/phone.png';

const HomeMain: React.FC = () => {
  return (
    <section>
      <div className="home--main full-height">
        <div className="container h-full flex justify-center content-center">
          <div className="flex w-full py-16">
            <div className="w-full md:w-3/5">
              <h1 className="home--main--title text-3xl md:text-5xl font-bold">
                Active. Effective. Engaging.
              </h1>
              <h3 className="text-2xl md:text-3xl font-medium mt-0">
                Social Media Marketing
              </h3>
              <p className="my-20 text-lg">
                Storm Social Connects the Biggest online Influencers &
                Celebrities giving you an opportunity to Win Luxury Prizes on a
                weekly basis!
              </p>
              <div className="buttons flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start">
                <button type="button" className="btn mr-0 mb-2 md:mr-6 md:mb-0">
                  View Packages
                </button>
                <button type="button" className="btn btn__outline">
                  How does it work?
                </button>
              </div>
            </div>
            <div className="w-2/5 flex flex-col justify-end hidden md:flex">
              <img src={phone} alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
