import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../../../assets/home/phone.png';

const HomeMain: React.FC = () => {
  return (
    <section className="home--main--bg bg-fixed">
      <div className="home--main full-height">
        <div className="container h-full flex justify-center content-center">
          <div className="flex w-full py-16">
            <div className="w-full md:w-3/5 text-center md:text-left">
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
              <div className="buttons flex flex-col justify-center items-center flex-wrap md:flex-row md:justify-start md:items-start">
                <Link
                  to="/giveaways/current"
                  className="btn mr-0 mb-4 md:mr-6 md:mb-0 w-2/3 sm:w-auto"
                >
                  Live Giveaway
                </Link>
                <button
                  type="button"
                  className="btn btn__outline bg-transparent text-white border-white hover:text-gray-200 hover:border-gray-200 w-2/3 sm:w-auto"
                >
                  How does it work?
                </button>
              </div>
            </div>
            <div className="w-2/5 flex flex-col justify-center hidden md:flex">
              <img width={700} src={phone} alt="Phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
