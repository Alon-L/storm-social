import React from 'react';
import AboutTeamMember, { AboutTeamMemberProps } from './AboutTeamMember';
import callumhine from '../../../assets/about/callum_hine.png';
import vicewardak from '../../../assets/about/vice_wardak.png';

const teamMembers: AboutTeamMemberProps[] = [
  {
    src: callumhine,
    name: 'Callum Hine',
    role: 'Co-Founder',
    url: 'https://www.instagram.com/itscallumhine',
  },
  {
    src: vicewardak,
    name: 'Vice Wardak',
    role: 'Co-Founder',
    url: 'https://www.instagram.com/itsvicetho',
  },
];

const About: React.FC = () => {
  return (
    <div className="container">
      <h1 className="text-4xl font-semibold text-center mb-5">About Us</h1>
      <div className="lg:w-3/4 mx-auto mb-16">
        <p>
          Here at Storm Social we have access to the largest Instagram network
          in the world & have many other expertise in the social media field
          allowing us to organically grow the online profiles of all our
          clients.
        </p>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Meet the Team</h1>
      <div className="flex flex-wrap justify-evenly">
        {teamMembers.map(teamMember => (
          <AboutTeamMember key={teamMember.name} {...teamMember} />
        ))}
      </div>
    </div>
  );
};

export default About;
