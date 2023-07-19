import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import applestore from '../../assets/apple-store-badge.png';
import googleplay from '../../assets/google-play-badge.png';
import phones from '../../assets/phones.png';

export const Hero: React.FC = () => {
  return (
    <div className="c-hero">
      <div className="c-hero__text">
        <h2 className="c-hero__brandtitle">Goodplace,</h2>
        <h1 className="c-hero__title">Dé donatie app.</h1>
        <h3 className="c-hero__subtitle">
          Doneer flexibel en vrijblijvend aan jouw goede doelen.
        </h3>
        <div className="c-hero__download-links">
          <div>
            <Link
              href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
              passHref
            >
              <a>
                <Image
                  height={41}
                  width={141}
                  alt="googleplay"
                  src={googleplay}
                />
              </a>
            </Link>
          </div>
          <div>
            <Link
              href="https://apps.apple.com/nl/app/goodplace/id1573545734"
              passHref
            >
              <a>
                <Image
                  width={125}
                  height={41}
                  alt="apple-store"
                  src={applestore}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="c-hero__image">
        <img className="c-content-block__image" alt="awd" src={phones.src} />
      </div>
    </div>
  );
};
