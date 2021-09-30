import React from 'react';

import Image from 'next/image';

import applestore from '../../assets/apple-store-badge.png';
import googleplay from '../../assets/google-play-badge.png';
import phones from '../../assets/phones.png';

export const Hero: React.FC = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__text">
        <h1 className="c-hero__title">
          Goodplace, your place to do good<span className="c-hero__dot">.</span>
        </h1>
        <h2 className="c-hero__subtitle">
          Geven is hier écht een
          <br /> fluitje van een cent.
        </h2>
        <div className="c-hero__download-links">
          <div>
            <Image height={41} width={141} alt="googleplay" src={googleplay} />
          </div>
          <div>
            <Image width={125} height={41} alt="apple-store" src={applestore} />
          </div>
        </div>
      </div>
      <div className="c-hero__image">
        <Image alt="hero-image" src={phones} priority />
      </div>
    </div>
  );
};
