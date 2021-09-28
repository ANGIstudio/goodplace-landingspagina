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
        <Link href="#" passHref>
          <a>
            <Image className="c-navigation__logo" alt="logo" src={logo} />
          </a>
        </Link>
      </div>
      <nav>
        <ul className="c-navigation__list">
          <li className="c-navigation__list-item">
            <Link href="#">Over Goodplace</Link>
          </li>
          <li className="c-navigation__list-item">
            <Link href="#">Veelgestelde vragen</Link>
          </li>
          <li className="c-navigation__list-item">
            <Link href="#">Contact</Link>
          </li>
          <li className="c-navigation__list-item">
            <Button
              tag="link"
              href="#"
              label="Download"
              variant="green"
              size="M"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};
