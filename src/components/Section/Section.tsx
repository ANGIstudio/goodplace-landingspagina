import React from 'react';

import cn from 'classnames';

interface SectionProps {
  bgColor?:
    | 'beige'
    | 'lightgreen'
    | 'lightbeige'
    | 'green'
    | 'lightorange'
    | 'darkorange'
    | 'semidarkorange'
    | 'mediumorange'
    | 'darkgreen'
    ;
  noPaddingBottom?: boolean;
  noPaddingTop?: boolean;
  bgImage?:
    | 'bg-people'
    | 'bg-hero'
    | 'bg-arrow'
    | 'bg-abouthero'
    | 'bg-howitworks1'
    | 'bg-howitworks2'
    | 'bg-howitworks3'
    | 'bg-usps'
    | 'bg-feedback'
    | 'bg-missie'
    | 'bg-banner';
}

export const Section: React.FC<SectionProps> = ({
  bgColor,
  noPaddingBottom,
  noPaddingTop,
  bgImage,
  children,
}) => {
  return (
    <section
      className={cn('l-section', {
        [`l-section--${bgColor}`]: bgColor,
        [`l-section--no-bottom`]: noPaddingBottom,
        [`l-section--no-top`]: noPaddingTop,
        [`${bgImage}`]: bgImage,
      })}
    >
      {children}
    </section>
  );
};
