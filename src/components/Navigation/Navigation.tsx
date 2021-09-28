import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import closed from '../../assets/closed.svg';
import hamburger from '../../assets/hamburger.svg';
import { Button } from '../Button/Button';

interface NavigationProps {
  logo: string;
  mobilelogo: string;
}

export const Navigation: React.FC<NavigationProps> = ({ logo, mobilelogo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="c-navigation">
      <div className="c-navigation__bar">
        <div className="c-navigation__logo">
          <Link href="#" passHref>
            <a>
              <Image alt="logo" src={logo} />
            </a>
          </Link>
        </div>

        <div className="c-navigation__mobile-logo">
          <Link href="#" passHref>
            <a>
              <Image alt="logo" src={mobilelogo} />
            </a>
          </Link>
        </div>

        <nav>
          <ul className="c-navigation__desktop">
            <li className="c-navigation__desktop-item">
              <Link href="#">Wat is het?</Link>
            </li>
            <li className="c-navigation__desktop-item">
              <Link href="#">Hoe werkt het?</Link>
            </li>
            <li className="c-navigation__desktop-item">
              <Link href="#">Contact</Link>
            </li>
            <li className="c-navigation__desktop-item">
              <Button
                tag="link"
                href="#"
                label="Download"
                variant="green"
                size="M"
              />
            </li>
          </ul>

          {isOpen ? (
            <ul className="c-navigation__mobile">
              <li className="c-navigation__mobile-item">
                <Link href="#">Wat is het?</Link>
              </li>
              <li className="c-navigation__mobile-item">
                <Link href="#">Hoe werkt het?</Link>
              </li>
              <li className="c-navigation__mobile-item">
                <Link href="#">Contact</Link>
              </li>
              <li className="c-navigation__mobile-item">
                <Button
                  tag="link"
                  href="#"
                  label="Download"
                  variant="green"
                  size="M"
                />
              </li>
            </ul>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={handleClick}
          className="c-navigation__hamburger"
        >
          <Image alt="hamburger" src={isOpen ? closed : hamburger} />
        </button>
      </div>
    </header>
  );
};
