import React from 'react';

export interface AboutTeamMemberProps {
  src: string;
  role: string;
  name: string;
  url: string;
}

const AboutTeamMember: React.FC<AboutTeamMemberProps> = (
  props: AboutTeamMemberProps,
) => {
  const { src, role, name, url } = props;

  return (
    <div className="lg:w-1/4 w-full lg:mb-0 mb-12 text-center flex flex-col items-center justify-center">
      <a
        className="transition-transform duration-200 ease-in-out transform hover:-translate-y-4"
        href={url}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img width={250} src={src} alt={name} />
      </a>
      <h3 className="text-2xl font-medium mt-5">{role}</h3>
      <p>{name}</p>
    </div>
  );
};

export default AboutTeamMember;
