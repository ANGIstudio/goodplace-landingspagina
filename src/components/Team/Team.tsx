import React from 'react';

import { TeamMember } from '../TeamMember/TeamMember';

const team = [
  {
    name: 'Frank Gottenbos',
    id: 1,
    description: 'Shaper & Getting things done',
    endeavors: 'Logica, Deutsche Telecom, Biners Business & IT, strategie',
  },
  {
    name: 'Menno van der Marel',
    id: 2,
    description: 'Impact maken met slimme innovaties',
    description2: 'Goede ideeën moeten echt een kans krijgen',
    endeavors: 'Fox-IT, VanDerSat, Ocean Cleanup',
  },
  {
    name: 'Yvo Gortemaker',
    id: 3,
    description: 'Digital Product Strategy, Entrepreneurship',
    endeavors: 'GlobalOrange, Saasmore SimpledCard',
  },
  {
    name: 'Leopold van Oosten',
    id: 4,
    description: 'UX, Tech, Strategy, Entrepreneurship',
    endeavors: 'You-Sir, Amsterdam Standard, Saasmore',
  },
];

export const Team: React.FC = () => {
  return (
    <div className="c-team">
      {team.map((member) => {
        return (
          <TeamMember
            key={member.id}
            name={member.name}
            description={member.description}
            description2={member.description2}
            endeavors={member.endeavors}
          />
        );
      })}
    </div>
  );
};
