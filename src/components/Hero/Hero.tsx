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
        <h1 className="c-hero__title">
          Goodplace, your place to do good<span className="c-hero__dot">.</span>
        </h1>
        <h2 className="c-hero__subtitle">
          Doneren was nog nooit zo makkelijk!
        </h2>
        <div className="c-hero__download-links">
          <div>
            <Link href="/download" passHref>
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
            <Link href="/download" passHref>
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
