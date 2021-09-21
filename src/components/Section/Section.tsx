import React from 'react';

import cn from 'classnames';

interface SectionProps {
  bgColor: 'primary' | 'secondary';
}

export const Section: React.FC<SectionProps> = ({ bgColor, children }) => {
  return (
    <section
      className={cn('l-section', {
        [`l-section--${bgColor}`]: bgColor,
      })}
    >
      {children}
    </section>
  );
};
