import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface NavigationProps {
  logo: StaticImageData;
  mobilelogo: StaticImageData;
}

export const Navigation: React.FC<NavigationProps> = ({ logo, mobilelogo }) => {
  return (
    <header className="c-navigation">
      <div className="c-navigation__bar">
        <div className="c-navigation__logo">
          <Link href="/" passHref>
            <a>
              <Image height={50} width={200} alt="logo" src={logo} priority />
            </a>
          </Link>
        </div>

        <div className="c-navigation__mobile-logo">
          <Link href="/" passHref>
            <a>
              <Image
                height={40}
                width={150}
                alt="logo"
                src={mobilelogo}
                priority
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};
