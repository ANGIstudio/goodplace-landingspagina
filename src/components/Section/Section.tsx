import React from 'react';

import cn from 'classnames';

interface SectionProps {
  bgColor?: 'primary' | 'secondary';
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  bgColor,
  noPaddingBottom,
  noPaddingTop,
  children,
}) => {
  return (
    <section
      className={cn('l-section', {
        [`l-section--${bgColor}`]: bgColor,
        [`l-section--no-bottom`]: noPaddingBottom,
        [`l-section--no-top`]: noPaddingTop,
      })}
    >
      {children}
    </section>
  );
};
