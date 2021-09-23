import React from 'react';

import Image from 'next/image';

import applestore from '../../assets/apple-store-badge.svg';
import googleplay from '../../assets/google-play-badge.png';

export const Hero: React.FC = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__text">
        <h1 className="c-hero__title">Goodplace, great world.</h1>
        <h2 className="c-hero__subtitle">
          Jij doneert wat kleins, samen verzetten we bergen.
        </h2>
        <div className="c-hero__downloadlinks">
          <Image width={100} height={40} alt="googleplay" src={googleplay} />
          <Image width={100} height={40} alt="apple-store" src={applestore} />
        </div>
      </div>
      <Image
        width={300}
        height={500}
        alt="hero-image"
        src="https://via.placeholder.com/150"
      />
    </div>
  );
};
