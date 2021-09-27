import React from 'react';

interface TeamMemberProps {
  name: string;
  description: string;
  description2?: string;
  endeavors: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  description,
  description2,
  endeavors,
}) => {
  return (
    <div className="c-team-member">
      <img src="https://via.placeholder.com/188" alt="team-member" />
      <div className="c-team-member__text">
        <div className="c-team-member__title">
          <p>
            <strong>{name}</strong>
            <br />
            {description}
            {description2 ? <p>{description2}</p> : ''}
          </p>
          <p>
            <i>Other endeavors:</i>
            <br />
            {endeavors}
          </p>
        </div>
      </div>
    </div>
  );
};
