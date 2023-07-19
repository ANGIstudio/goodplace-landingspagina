import React from 'react';

import cn from 'classnames';
import Image from 'next/image';

interface UspProps {
  usp: {
    title: string;
    image: StaticImageData;
    description: string;
  };
  variant: 'primary' | 'secondary';
}

export const Usp: React.FC<UspProps> = ({ usp, variant }) => {
  const classNames = cn('c-usp', {
    [`c-usp--${variant}`]: variant,
  });

  return (
    <div className={classNames} key={usp.title}>
      <div className="c-usp__image">
        <Image alt={usp.title} src={usp.image} />
      </div>
      <p className="text-2xl font-extrabold">
        {usp.title}
      </p>
      <p className="ml-10 mr-10 text-lg font-medium">{usp.description}</p>
    </div>
  );
};
