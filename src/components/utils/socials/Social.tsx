import React from 'react';
import { Link } from 'react-router-dom';
import SocialContainer from './SocialContainer';
import SocialContent, { SocialContentProps } from './SocialContent';

export interface SocialProps extends SocialContentProps {
  route: string;
}

const Social: React.FC<SocialProps> = (props: SocialProps) => {
  const { route, button } = props;

  return (
    <SocialContainer>
      {button ? (
        <SocialContent {...props} />
      ) : (
        <Link to={route}>
          <SocialContent {...props} />
        </Link>
      )}
    </SocialContainer>
  );
};

export default Social;
