import React from 'react';

import Image from 'next/image';

import applestore from '../../assets/apple-store-badge.svg';
import googleplay from '../../assets/google-play-badge.png';

export const Hero: React.FC = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__text">
        <h1 className="c-hero__title">Goodplace, your place to do good.</h1>
        <h2 className="c-hero__subtitle">
          Geven is hier écht een
          <br /> fluitje van een cent.
        </h2>
        <div className="c-hero__download-links">
          <Image width={100} height={40} alt="googleplay" src={googleplay} />
          <Image width={100} height={40} alt="apple-store" src={applestore} />
        </div>
      </div>
      <div className="c-hero__image">
        <Image
          width={300}
          height={500}
          alt="hero-image"
          src="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
};
