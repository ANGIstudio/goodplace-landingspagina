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
          Doneer flexibel, overzichtelijk en geef met een goed gevoel aan jouw
          goede doelen.
        </h3>
        <div className="c-hero__download-links">
          <div>
            <Link
              href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
              passHref
            >
              <a>
                <Image
                  height={48}
                  width={161}
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
                  width={161}
                  height={48}
                  alt="apple-store"
                  src={applestore}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="order-1 md:order-2 m-auto md:m-0 md:w-1/2">
        <Image alt="phones" src={phones} />
      </div>
    </div>
  );
};
