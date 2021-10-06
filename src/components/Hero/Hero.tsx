import React from 'react';

import Image from 'next/image';

import applestore from '../../assets/apple-store-badge.png';
import googleplay from '../../assets/google-play-badge.png';
import nonprofitdesktop from '../../assets/non-profit-desktop.png';
import phones from '../../assets/phones.png';

export const Hero: React.FC = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__sticker">
        <Image alt="non-profit-desktop" src={nonprofitdesktop} />
      </div>
      <div className="c-hero__text">
        <h1 className="c-hero__title">
          Goodplace, your place to do good<span className="c-hero__dot">.</span>
        </h1>
        <h2 className="c-hero__subtitle">
          Doneren was nog nooit zo makkelijk!
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
        <img className="c-content-block__image" alt="awd" src={phones.src} />
      </div>
    </div>
  );
};
