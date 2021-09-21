import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../Button/Button';

interface NavigationProps {
  logo: string;
}

export const Navigation: React.FC<NavigationProps> = ({ logo }) => {
  return (
    <header className="c-navigation">
      <div>
        <Link href="/" passHref>
          <Image width="125px" height="75px" alt="logo" src={logo} />
        </Link>
      </div>
      <nav>
        <ul className="c-navigation__list">
          <li className="c-navigation__listitem">
            <Link href="/about">Over Goodplace</Link>
          </li>
          <li className="c-navigation__listitem">
            <Link href="/faq">Veelgestelde vragen</Link>
          </li>
          <li className="c-navigation__listitem">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="c-navigation__listitem">
            <Button
              tag="link"
              href="/download"
              label="Download"
              variant="secondary"
              size="M"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
